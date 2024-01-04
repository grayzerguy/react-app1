import { useState } from "react"



function ListGroup() {
    //-1 no item selected


    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]

    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <div>
            <h1>LIST</h1>
            {items.length === 0 && <h1>No items found</h1>}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item  '} key={item} onClick={() => setSelectedIndex(index)}>{item}</li>
                )}
            </ul>
        </div>
    )
}


export default ListGroup