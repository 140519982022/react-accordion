import { apiDataArr } from './Api_data';
import '../css/accordian.css'
import { useState } from 'react';

function Accordian() {

    const [currentId, setCurentId] = useState(apiDataArr[0].id);

    var getUpdateCurrentId = (updateId) => {

        setCurentId(updateId);

    }


    let finalData = apiDataArr.map((productsItem, productsId) => {
    
        // console.log(currentId);
    
        return (
            <>
                <div class="faq">
                    <div class="faqItem">
                        <div class="faqQUEST" onClick={ () => getUpdateCurrentId(productsItem.id)}>
                            <h1>Accordion Item #{productsItem.id}</h1>
    
                        </div>
    
                        <div class= {(currentId === productsItem.id) ? 'faqANS addANS' : ' faqANS '}>
                            <p>
                            {productsItem.description}
                            </p>
                        </div>
                    </div>
                </div>
    
            </>
        )
    }
    
    
    )


    return (
        <>
            {finalData}



        </>
    )



}

export default Accordian