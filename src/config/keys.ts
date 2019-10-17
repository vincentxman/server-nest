export default {
    port: 8000,
    mongoURI: 'mongodb://testAdmin:testAdmin12345@localhost:37018/test',
    mongoOpts: {
        promiseLibrary: require('bluebird'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    graphOpts: {
        debug: true,
        playground: true,
        autoSchemaFile: 'schema.gql',
    },
};
// 服务启动 port改成 “--port 37018”， 需要验证密码 “--auth”
// D:\MongoDB\Server\4.3\bin\mongod.exe --auth --service --port 37018 --dbpath D:\MongoDB\data --logpath=D:\MongoDB\logs\mongodb.log  --logappend

// 创建root 账号
// use admin
// db.createUser({user:"root",pwd:"root12345",roles:["root"]})

// 登录
// db.auth("root", "root12345")

// 查看 users
// db.system.users.find().pretty()

// 数据库test的权限设定
// mongoDB的权限设置是以库为单位的,必选要先选择库
// readWrite test,clusterAdmin与readAnyDatabase角色适用于admin库
/*
use test
db.createUser(
    {
        "user": "testAdmin",
        "pwd": "testAdmin12345",
        "customData": { employeeId: 12345 },
        "roles": [{ role: "clusterAdmin", db: "admin" },
        { role: "readAnyDatabase", db: "admin" },
            "readWrite"]
    },
    { w: "majority", wtimeout: 5000 })
*/
