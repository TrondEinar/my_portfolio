import React from 'react';

function Categories({filter, categories}) {
    return (
        <div className="buttons">
            {
                categories.map((cat, i) => {
                    return <button className="btn-portfolio" type="button" onClick={() => filter(cat)} key={i}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories;