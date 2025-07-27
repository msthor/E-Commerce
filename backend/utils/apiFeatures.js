class ApiFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
        ? {
            name:{
                $regex: this.queryStr.keyword,
                $options: "i" // case-insensitive
            },

        }: {};
       
        this.query = this.query.find({ ...keyword });
        return this;
    }
    filter(){
        const queryCopy = {...this.queryStr};// creating a copy of the query string because we don't want to modify the original query string
        // removing fields from the query string
        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach((key) => delete queryCopy[key]);

        // filter for price and rating
        let queryStr = JSON.stringify(queryCopy);// converting the queryCopy object to a JSON string

        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g  , (key) => `$${key}`);// replacing gt, gte, lt, lte with $gt, $gte, $lt, $lte

        this.query = this.query.find(JSON.parse(queryStr)); // parsing the JSON string back to an object    

        return this;
    }
    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1; // current page number from query string or default to 1
        const skip = resultPerPage * (currentPage - 1); // number of documents to skip

        this.query = this.query.limit(resultPerPage).skip(skip); // limiting the number of documents returned and skipping the specified number of documents

        return this;
    } 
}

module.exports = ApiFeatures;