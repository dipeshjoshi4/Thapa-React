export const Practices = () => {
    const students = []
    return (
        <>

            {/* 1st solution */}
            {/* <p>{students.length === 0 && "No Students Found"}</p> */}


            {/* 2nd  solution */}
            {/* const students = [1] */}

            {/* 3rd solution */}
            {/* <p>{!students.length  && "No Students Found"}</p> */}

            {/* 4th solution */}
            {/* <p>{!Boolean(students.length)  && "No Students Found"}</p> */}

            <p>{students.length && "No Students Found"}</p>
            <p>Number Of Students : {students.length}</p>
        </>
    );
};