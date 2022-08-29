import React from 'react';
import Category from '../Category/Category';

let categories = [
    'Category 01',
    'Category 02',
    'Category 03',
    'Category 04',
    'Category 05',
    'Category 06',
]

function Categories(){
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                <div className="row">
                { categories.map( (category, idx) => <Category key={category + idx} category={category}/> )} 
                    
                </div>
            </div>
        </div>

    );
}

export default Categories