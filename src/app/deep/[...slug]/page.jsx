import React from "react";

const DeepChild = async ({ params }) => {
    const x =  await params

    
  return <div>Deep clild Params {x.slug} </div>;
};

export default DeepChild;
