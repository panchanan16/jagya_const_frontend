import { useState } from "react"

function SearchInput() {
    const [showList, setShowList] = useState(false)
    function displaySearchList() {
        setShowList(!showList)
    }
    return (
        <div className="field selectBox">
            <p className="title client-selector">Select a Client</p>
            <input type="text" placeholder="Search here...." onFocus={displaySearchList} />
            <ul className={`${showList ? '' : 'hide'} list-options`}>
                <li data-value="Manash Kakoti" onClick={displaySearchList}>Manash Kakoti</li>
                <li data-value="Kankan Jyoti Nath">Kankan Jyoti Nath</li>
                <li data-value="Panchanan Deka">Panchanan Deka</li>
                <li data-value="Mintu Sharma">Mintu Sharma</li>
                <li data-value="Dipankor Doley">Dipankor Doley</li>
            </ul>
        </div>
    )
}

export default SearchInput