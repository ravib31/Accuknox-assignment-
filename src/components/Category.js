import React from 'react';
import Widget from './Widget';

function Category({ category, widgets }) {
  return (
    <div>
    <h2>{category}</h2>
    <div className="flex flex-wrap w-full justify-start gap-3 items-center px-2">
      {widgets.map((widget) => (
        <Widget key={widget.id} category={category} widget={widget} />
      ))}
    </div>
    </div>
  );
}

export default Category;
