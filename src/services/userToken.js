// using static token, since token are required
export const userLogin = () => {
    const user = {
        "data": {
            "user": {
                "role": "admin",
                "createdAt": "2022-10-12T16:31:44.574Z",
                "_id": "6346ec01cb33e5b2d4d3335f",
                "name": "Syuhada Dwi Agung",
                "email": "testtwo@gmail.com",
                "__v": 0
            }
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZlYzAxY2IzM2U1YjJkNGQzMzM1ZiIsImlhdCI6MTY2NTU5MjMyMSwiZXhwIjoxNjczMzY4MzIxfQ.RT2sWnU1ns_E2MXfquIj3CKz1XYpxYJfTEu52b-v8HU"
    }

    return user;
}