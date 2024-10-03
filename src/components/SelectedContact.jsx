import { useState, useEffect  } from 'react';

function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function singleContact() {
            try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json();
                setContact(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        singleContact();
    }, [selectedContactId]);

     if (!contact) {
       return <div>Loading contact details...</div>;
     }

     const {name, email, phone, website} = contact

    return (
      <>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Contact Details for {name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{phone}</td>
            </tr>
            <tr>
                <td>Website</td>
                <td>{website}</td>
            </tr>
          </tbody>
        </table>
      </>
    );

}

export default SelectedContact;