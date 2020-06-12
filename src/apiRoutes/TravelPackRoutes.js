const axios = require('axios').default;

export const addTravelPackage = async(pack) =>{

    
        try {
            
    
            const reqBody = pack;

            console.log('reqbody',reqBody);
    
         
    
            const response = await axios
                .request({
                    method: "POST",
                    url: `http://localhost:4000/package/addPackage`,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*",
                    },
                    data: JSON.stringify(reqBody),
                })
                .then((res) => {
                    const result = res.data;

                    console.log('result',result);
    
                    return result;
                });
    
            const resData = await response;



            return resData;
        } catch (e) {
            console.log(e);
        }
    
    

}


export const getAllPackages = async () => {
	const response = await axios.get(
		`http://localhost:4000/package/getAllPackages`
	);
	return response;
};

export const removePackage = async (data) => {

    try {

        const id = data;
        const response = await axios.request({
            method: 'DELETE',
            url: `http://localhost:4000/package/deletePackage/${id}`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }

        }).then((res) => {
        });

    } catch (e) {
        console.log(e);
    }


}