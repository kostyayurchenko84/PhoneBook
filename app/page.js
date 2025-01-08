import Image from "next/image";
import classes from "./page.module.css";
import PhonesPage from "./components/phones/phonesPage";
import { getPhones } from "@/lib/phones";

export default async function PhoneBook() {
  const phones = await getPhones();
  return (
      <main>
        <table className={classes.phonebook}>
          <thead>
            <tr>
              <th>Предприятие</th>
              <th>Подразделение</th>
              <th>Должность</th>
              <th>ФИО</th>
              <th>Внутренний</th>
              <th>Городской</th>
              <th>Мобильный</th>
            </tr>
          </thead>
          <tbody>
            <PhonesPage items={phones}/>
          </tbody>
        </table>  
      </main>
  );
}
