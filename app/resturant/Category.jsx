import React from 'react'

const Category = ({categories,filterItems}) => {
  return (
    <div className='flex items-center justify-center gap-4 flex-wrap py-6'>
        {categories.map((category,index)=> {
            return (
                <button key={index} className='py-2 px-4 rounded-sm font-semibold text-accent hover:bg-accent hover:text-white transition duration-300'
                type='button'
                onClick={() => filterItems(category)}>
                    {category}
                </button>
            )
        })}
    </div>
  )
}

export default Category