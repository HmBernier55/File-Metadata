# File Metadata Microservice

This is the code for the File Metadata Microservice project. Instructions for building the project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice

## Code Explanation
* The code includes one route:
    * `/api/fileanalyse`
        * It takes an inputted file and returns a JSON object of the file's name, type, and size
        ```
        {
            name: <file name string>,
            type: <file type string>,
            size: <file size in bytes>
        }
        ```