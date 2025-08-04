function NumberList() {
    const numbers = [100, -22, 21, -9, 5, 3, -1, 2, 4, 0];

    return (
        <div>
            <h2>Skaiciu sarasas</h2>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>
                        {number} - {number > 0 ? 'teigiamas' : number < 0 ? 'neigiamas' : 'nulis'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NumberList;