import "bootstrap/dist/css/bootstrap.css"
const Items = ({items}) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item) => (
                        <tr key={item.id}> 
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.location}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
     );
}
 
export default Items;