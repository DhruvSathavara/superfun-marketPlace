import React from 'react';
import DisplayPublications from './NftPostModal';
import { LensAuthContext } from '../../../context/LensContext';
export default function NewdisplayPublication() {

    const lensAuthContext = React.useContext(LensAuthContext);
    const { NFTPosts, profile } = lensAuthContext;

    return (
        <div style={{ display: "flex" }} className='row'>
            {
                NFTPosts && NFTPosts.map((pub) => {
                    // console.log(pub);
                    if (pub.__typename === "Post" ) {
                        return (
                            <div className='col-4'>
                                <DisplayPublications pub={pub} />
                            </div>
                        )
                    } 
                })
            }
           
        </div>
    )
}
