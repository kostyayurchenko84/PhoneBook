const sql = require('better-sqlite3');
const db = sql('phones.db');

const dummyPhones = [
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Приемная генерального директора',
	name: '',
	in_number: '+375(232)793555',
    out_number: '+375(232)338530',
    mobile: '',
  },
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Главный инженер - заместитель генерального директора',
	name: 'Серебренников Антон Валерьевич',
	in_number: '+375(232)793560',
    out_number: '',
    mobile: '+375(29)8301632',
  },
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Заместитель генерального директора по строительству и общим вопросам',
	name: 'Котик Андрей Богданович',
	in_number: '+375(232)793748',
    out_number: '+375(232)338506',
    mobile: '+375(33)3993207',
  },
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Заместитель генерального директора по экономике',
	name: 'Кузьменко Владислав Аркадьевич',
	in_number: '+375(232)793489',
    out_number: '',
    mobile: '+375(29)7316524',
  },
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Заместитель генерального директора по производству',
	name: 'Воробьев Денис Вячеславович',
	in_number: '+375(232)793787',
    out_number: '',
    mobile: '+375(29)7393562',
  },
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Заместитель генерального директора по геологии',
	  name: 'Повжик Петр Петрович',
	  in_number: '+375(232)793511',
    out_number: '',
    mobile: '+375(33)3993511',
  },
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Заместитель генерального директора по внешнеэкономической деятельности и обеспечению производства',
	  name: 'Макаров Сергей Владимирович',
	  in_number: '+375(232)793750',
    out_number: '+375(232)338540',
    mobile: '+375(33)3993307',
  },
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Заместитель генерального директора по обеспечению углеводородным сырьем и реализации продукции',
	  name: 'Каморников Сергей Сергеевич',
	  in_number: '+375(232)793744',
    out_number: '',
    mobile: '+375(33)3993427',
  },
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Заместитель генерального директора по безопасности, режиму и кадрам',
	  name: 'Ткачев Александр Геннадьевич',
	  in_number: '+375(232)793525',
    out_number: '',
    mobile: '+375(29)9160889',
  },
  {
    structure: 'ЦА',
    departure: 'Центральный аппарат',
    title: 'Заместитель генерального директора по идеологической и социальной работе, мотивации и развитию персонала',
	  name: 'Федорович Ольга Владимировна',
	  in_number: '+375(232)793449',
    out_number: '',
    mobile: '',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS phones (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       structure TEXT NOT NULL,
       departure TEXT NOT NULL,
       title TEXT NOT NULL,
       name TEXT,
       in_number TEXT,
       out_number TEXT,
       mobile TEXT
    )
`).run();

db.prepare(`
  DELETE FROM phones WHERE ID>-1
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO phones VALUES (
         null,
         @structure,
         @departure,
         @title,
         @name,
         @in_number,
         @out_number,
         @mobile
      )
   `);

  for (const phone of dummyPhones) {
    stmt.run(phone);
  }
}

initData();
