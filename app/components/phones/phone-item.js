import classes from './phone-item.module.css';
export default function PhoneItem({structure,departure,title,name,in_number,out_number,mobile}) {
    return (
        <>
            <td>{structure}</td>
            <td className={classes.oneline}>{departure}</td>
            <td>{title}</td>
            <td className={classes.oneline}>{name}</td>
            <td>{in_number}</td>
            <td>{out_number}</td>
            <td>{mobile}</td>
        </>
    );
}