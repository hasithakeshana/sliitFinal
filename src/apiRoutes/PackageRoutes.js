const axios = require('axios').default;

export const getAllPackages = async () => {
	const response = await axios.get(
		`http://localhost:4000/package/allPackages`
	);
	return response;
};

export const getUniqueCourse = async (id) => {

	console.log('route id',id);

    try {

;
        const response = await axios.request({
            method: 'GET',
            url: `http://localhost:4000/package/package/${id}`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }

        });
		
		return response;

    } catch (e) {
        console.log(e);
    }


}



export const bookCourse = async(data) =>{

        try {
            
			console.log('data',data);

			const {id,email,userId} = data;

			const reqBody = {email,userId};
    
            const response = await axios
                .request({
                     method: "POST",
                    url: `http://localhost:4000/user/bookPackage/${id}`,
                     headers: {
                         "Content-Type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*",
                    },
                    data: JSON.stringify(reqBody),
                 })
                 .then((res) => {
                    const result = res.data;

                    console.log('result book',result);
    
                     //return result;
                });
    
           const resData = await response;
           console.log('data of the user book'+resData);


        return resData;
         } catch (e) {
            console.log(e);
	    }
		
    
    

}


export const getAllTotalPackages = async () => {
	const response = await axios.get(
		`http://localhost:4000/course/getTotalOfCourses`
	);
	return response;
};

