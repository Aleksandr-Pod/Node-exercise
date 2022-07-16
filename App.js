//  console.clear();
// const { userOne, userTwo } = require('./testFolder');
// console.log("Result:", userTwo);

// const fs = require('fs').promises;
//          или
// const fs = require('fs/promises');
// fs.appendFile('testFolder/index.js', '// пробую добавить строку в файл');
// fs.readFile('testFolder/index.js').then(data => console.log(data.toString()));
// const path = require('path');
// const allPath = path.join(__dirname, "testFolder");
// console.log('allPath:', allPath);
//     с этим (allPath) не работает,
//     но работает с (__dirname)
// fs.readdir(allPath)
//   .then(files => {
//     return Promise.all(
//       files.map(async filename => {
//         const stats = await fs.stat(filename);
//         return {
//           Name: filename,
//           Size: stats.size,
//           Date: stats.mtime,
//         };
//       }),
//     );
//   })
//   .then(result => console.table(result));

//     а тут работает и так, и так
// fs.readFile(`${allPath}/index.js`)
//   .then(res => console.log(res.toString()))
//   .catch(err => console.log(err.message))

//              Part - 2
//            Угадай число
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// const fs = require('fs/promises');
// const { program } = require('commander');
// require('colors');
// program.option(
//   '-f, --file [type]',
//   'file for saving game results',
//   'results.txt',
// );
// program.parse(process.argv); // парсим массив команды

// let count = 0;
// const logFile = program.opts().file;
// const mind = Math.floor(Math.random() * 10) + 1; // задуманное число

// const isValid = value => {
//   if (isNaN(value)) {
//     console.log('Введите число!'.red);
//     return false;
//   }
//   if (value < 1 || value > 10) {
//     console.log('Число должно быть в диапазоне 1 до 10'.red);
//     return false;
//   }
//   return true;
// };

// const log = async data => {
//   try {
//     await fs.appendFile(logFile, `${data}\n`);
//     console.log(`Удалось сохранить результат в файл ${logFile}`.green);
//   } catch (err) {
//     console.log(`Не удалось сохранить файл ${logFile}`.red);
//   }
// };

// const game = () => {
//   rl.question(
//     'Введите число от 1 до 10, чтобы угадать задуманное: '.yellow,
//     value => {
//       let a = value;
//       if (!isValid(a)) {
//         game();
//         // return;
//       }
//       count += 1;
//       if (a === mind) {
//         console.log('Поздравляю Вы угадали число за %d шага(ов)'.green, count);
//         log(
//           `${new Date().toLocaleDateString()}: Поздравляю Вы угадали число за ${count} шага(ов)`,
//         ).finally(() => rl.close());
//         return;
//       }
//       console.log('Вы не угадали еще попытка'.red);
//       game();
//     },
//   );
// };

// game(); // запускаем игру



//                Module-2

// const express = require('express');
// const app = express();
// const contacts = require('./data/contacts.json');
// const cors = require('cors');
// const moment = require('moment');
// const fs = require('fs/promises');
// const path = require('path');
// const serverLogPath = path.join(__dirname, 'server.log');

// app.use(async (req, res, next) => {       // middleware
//     let a = 0;
//     console.log('Наше промежуточное ПО', a);
//     cors(); // разрешаем запросы на сторонние ресурсы
//     a +=1;
//     express.urlencoded({ extended: false });
//     console.log('Наше 2е промежуточное ПО', a);
//     express.json(); // заголовок запроса будет в JSON формате
//     const date = moment().format("DD-MM-YY_hh:mm:ss");
//     await fs.appendFile(serverLogPath, `${req.method} ${date} \n`);
//   next();
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const markup = contacts.map(
//     el => `<p>Name: ${el.name}</p>`
// ).join('');
    
// app.get('/contact', (req, res) => {
//       res.send('<h1>Contact first string</h1>');
// });
// app.get('/contact/:id', (req, res) => {
//   console.log('get req params:', req.params.id);
//   res.send({ 'get-req-params': req.params.id })
// })
// app.use((req, res, next) => { // для не найденного адреса ставят в самый конец
//     res.status(404).json({ message: 'Not Found' });
// } )
// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });


//                Module 3

// require('dotenv').config();
// const { DB_HOST, PORT = 3030 } = process.env;

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const contactsRouter = require('./routes/api/contacts');

// const mongoose = require('mongoose');
// app.use(express.json());
// app.use(cors());
// app.use('/api/contacts', contactsRouter);

// mongoose.connect(DB_HOST)
//   .then(() => {
//     console.log("Connected to MongoDB - Contacts_Book");
//     app.listen(PORT, () => console.log('listening port:', PORT));
//   })
//   .catch((err) => {
//     console.log(err.message)
//     process.exit(1)
//   })


//                 Module 6
//              Email - Docker
require('dotenv').config()

const nodemailer = require('nodemailer')
const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'stdfire@meta.ua',
    pass: process.env.EMAIL_PASSWORD,
  },
}
const transporter = nodemailer.createTransport(config)

const emailOptions = {
  from: 'stdfire@meta.ua',
  to: 'stdfire@gmail.com',
  subject: 'Nodemailer test',
  text: 'Привет. Мы тестируем отправку писем!',
}
transporter
  .sendMail(emailOptions)
  .then(info => console.log(info))
  .catch(err => console.log(err.message));