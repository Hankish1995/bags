

const Bags = () => {
  return (
    <div className="bags_wrapper">
        <div className="bags_card">
            <div className="input-groups d-flex gap-3 align-items-center">
                <span>Count</span>
               <h4 className="flex-grow-1">text</h4>
                <button>Add Details</button>
                <button>Add</button>
                <button>Remove</button>
            </div>
            <ul className="p-0 m-0 d-flex gap-3 bag_list pt-3">
                <li className="position-relative">Bag1

                <div className="tooltip-custom">
                    <p>Out  Dec %th</p>
                    <p>Employee 1214</p>
                    <p>Out for 24 hours</p>
                    <p>Notification Dec 6th 12:15</p>
                </div>

                </li>
                <li>Bag1</li>
                <li>Bag1</li>
                <li>Bag1</li>
                <li>Bag1</li>
                <li>Bag1</li>
                <li>Bag1</li>
                <li>Bag1</li>
                <li>Bag1</li>
                <li>Bag1</li>
                <li>Bag1</li>
            </ul>
        </div>
    </div>
  )
}

export default Bags