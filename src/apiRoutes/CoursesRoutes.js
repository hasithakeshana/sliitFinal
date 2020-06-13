const axios = require('axios').default;

export const getAllCourses = async () => {
	const response = await axios.get(
		`http://localhost:4000/course/allCourses`
	);
	return response;
};

export const getUniqueCourse = async (id) => {

	console.log('route id',id);

    try {

;
        const response = await axios.request({
            method: 'GET',
            url: `http://localhost:4000/course/course/${id}`,
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
                    url: `http://localhost:4000/student/bookCourse/${id}`,
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


export const getAllTotalCourses = async () => {
	const response = await axios.get(
		`http://localhost:4000/course/getTotalOfCourses`
	);
	return response;
};

