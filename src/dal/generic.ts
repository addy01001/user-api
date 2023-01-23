import { FilterQuery, Model, UpdateQuery } from "mongoose";

export abstract class Generic<T>{
    private model: Model<T>
    private queryKey: string

    constructor(schema: Model<T>, id: string) {
        this.model = schema
        this.queryKey = id
    }

    public create = (data: T) => {
        let newModel = new this.model(data)
        return newModel.save()
    }

    public get = (id: string) => {
        console.log(this.queryKey)
        return this.model.findOne({ "_id": id }).exec()
    }

    public getAll = (query: FilterQuery<T>) => {
        return this.model.find(query).exec()
    }

    public delete = (id: string) => {
        return this.model.findByIdAndDelete({ "_id": id }).exec()
    }
    
    public update = (id: string, data: UpdateQuery<T>) => {
        return this.model.findOneAndUpdate({ "_id": id }, data)
    }
}