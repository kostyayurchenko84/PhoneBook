import PhoneItem from "./phone-item";

export default function PhonesPage({items}) {
    return (
        <>
            {items.map((phone) => (
                    <tr key={phone.id}><PhoneItem {...phone}/></tr>
                )
            )}
            
            
        </>
    );
}