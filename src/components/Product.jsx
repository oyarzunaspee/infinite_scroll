function Product(props) {
    return (
        <>
            <div
                key={props.item.id}
                className="bg-white shadow-sm rounded-lg p-5 text-gray-200 mt-5">
                <div className="flex mb-5">
                    <h2 className="text-primary text-lg">
                        <span className="text-light mr-2">
                            {props.item.id}
                        </span>
                        {props.item.title}
                    </h2>
                </div>
                <div className="flex items-center">
                    <div className="basis-3/4">
                        <p className="text-light text-xs pr-6 mt-2 pb-2">
                            {props.item.description}
                        </p>
                    </div>
                    <div className="basis-1/4 flex flex-col justify-between items-center">
                        <img src={props.item.images && props.item.images[0]} className="aspect-square rounded bg-gray-200" alt="product" />
                        <div className="flex justify-center mt-3">
                            <h1 className="font-bold text-xl text-primary">
                                ${props.item.price}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;