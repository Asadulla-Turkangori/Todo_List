const pool = require('../database');

module.exports =  class Lists{
    constructor(id,description,active){
        this.id = id;
        this.description = description;
        this.active = active;
    }

    static fetchAll = ()=>{
        return pool.execute("select * from lists order by active");
    }

    static post(desc){
        return pool.execute('INSERT INTO lists (description) VALUES (?)',[desc]);
    }

    static update(id,desc){
        return pool.execute('UPDATE lists set description = (?) WHERE id = (?)',[desc,id]);
    }

    static delete(id){
        return pool.execute('DELETE FROM lists where id = (?)',[id]);
    }

    static updateAct(id,active){
        return pool.execute('UPDATE lists set active = (?) WHERE id = (?)',[active,id]);
    }
}
