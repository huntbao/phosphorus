exports.projectGroups = [{
    "id": 10207,
    "name": "测试",
    "creatorId": 10011,
    "type": 0,
    "fromUsrGroup": "0",
    "creatorName": "包勇明",
    "projects": [{
        "id": 10597,
        "name": "勿删",
        "type": 0,
        "creatorId": 10011,
        "creatorName": "包勇明",
        "qbsId": 0
    }, {"id": 10484, "name": "公共资源库", "type": 1, "creatorId": 10011, "creatorName": "包勇明", "qbsId": 0}]
}, {
    "id": 10088,
    "name": "默认分组",
    "creatorId": 10011,
    "type": 1,
    "fromUsrGroup": "0",
    "creatorName": "包勇明",
    "projects": [{"id": 10182, "name": "公共资源库", "type": 1, "creatorId": 10011, "creatorName": "包勇明", "qbsId": 0}]
}]

exports.projects = {
    "10182": {
        "pages": [],
        "interfaces": [],
        "templates": [],
        "datatypes": [
            {
                "id": 10003,
                "name": "Boolean",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10002,
                "name": "Number",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10001,
                "name": "String",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10000,
                "name": "Variable",
                "format": 0,
                "updateTime": 1438067940000
            }
        ],
        "attributes": [],
        "project": {
            "id": 10182,
            "name": "公共资源库",
            "group": "默认分组"
        },
        "timestamp": 1447154077617
    },
    "10484": {
        "pages": [],
        "interfaces": [],
        "templates": [],
        "datatypes": [
            {
                "id": 10003,
                "name": "Boolean",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10002,
                "name": "Number",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10001,
                "name": "String",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10000,
                "name": "Variable",
                "format": 0,
                "updateTime": 1438067940000
            }
        ],
        "attributes": [],
        "project": {
            "id": 10484,
            "name": "公共资源库",
            "group": "测试"
        },
        "timestamp": 1447154077545
    },
    "10597": {
        "pages": [
            {
                "id": 10085,
                "path": "/user/profile/:id/",
                "name": "页面测试1",
                "templates": [
                    10200
                ],
                "interfaces": [
                    10670
                ],
                "description": "页面测试1",
                "parameters": [],
                "updateTime": 1447049357000
            },
            {
                "id": 10086,
                "path": "/profile/user/p:id",
                "name": "1页面测试",
                "templates": [
                    10199
                ],
                "interfaces": [
                    10668
                ],
                "description": "1页面测试",
                "parameters": [],
                "updateTime": 1447049388000
            }
        ],
        "interfaces": [
            {
                "id": 10670,
                "name": "搜索接口列表",
                "description": "",
                "path": "/api/ndir/search",
                "method": 0,
                "isRest": 1,
                "inputs": [
                    {
                        "id": 13315,
                        "name": "complex",
                        "type": 10543,
                        "isPrimite": 0,
                        "typeName": "Project",
                        "isSysType": 0,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1447153055000
                    },
                    {
                        "id": 10780,
                        "datatypeId": 10547,
                        "datatypeName": "SearchParam",
                        "projectId": 10597,
                        "name": "pid",
                        "originalType": 10001,
                        "type": 10001,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "项目id",
                        "updateTime": 1446793783000
                    },
                    {
                        "id": 10781,
                        "datatypeId": 10547,
                        "datatypeName": "SearchParam",
                        "projectId": 10597,
                        "name": "offset",
                        "originalType": 10002,
                        "type": 10002,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446793783000
                    },
                    {
                        "id": 10782,
                        "datatypeId": 10547,
                        "datatypeName": "SearchParam",
                        "projectId": 10597,
                        "name": "limit",
                        "originalType": 10002,
                        "type": 10002,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446793783000
                    },
                    {
                        "id": 10783,
                        "datatypeId": 10547,
                        "datatypeName": "SearchParam",
                        "projectId": 10597,
                        "name": "key",
                        "originalType": 10001,
                        "type": 10001,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446793783000
                    },
                    {
                        "id": 10784,
                        "datatypeId": 10547,
                        "datatypeName": "SearchParam",
                        "projectId": 10597,
                        "name": "type",
                        "originalType": 10001,
                        "type": 10001,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446793783000
                    },
                    {
                        "id": 10785,
                        "datatypeId": 10547,
                        "datatypeName": "SearchParam",
                        "projectId": 10597,
                        "name": "table",
                        "originalType": 10001,
                        "type": 10001,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446793783000
                    },
                    {
                        "id": 10786,
                        "datatypeId": 10547,
                        "datatypeName": "SearchParam",
                        "projectId": 10597,
                        "name": "isExact",
                        "originalType": 10002,
                        "type": 10002,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446793783000
                    }
                ],
                "outputs": [
                    {
                        "id": 13305,
                        "name": "code",
                        "type": 10001,
                        "isPrimite": 0,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446793594000
                    },
                    {
                        "id": 13306,
                        "name": "msg",
                        "type": 10001,
                        "isPrimite": 0,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446793594000
                    },
                    {
                        "id": 13307,
                        "name": "result",
                        "type": 10548,
                        "isPrimite": 0,
                        "typeName": "Interface",
                        "isSysType": 0,
                        "isArray": 1,
                        "description": "",
                        "updateTime": 1446793664000
                    }
                ],
                "updateTime": 1447040034000
            },
            {
                "id": 10678,
                "name": "获取测试数据",
                "description": "",
                "path": "/api/parameter/getTestData",
                "method": 0,
                "isRest": 0,
                "inputs": [
                    {
                        "id": 13316,
                        "name": "id",
                        "type": 10002,
                        "isPrimite": 0,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "test data id",
                        "updateTime": 1447153216000
                    },
                    {
                        "id": 13317,
                        "name": "type",
                        "type": 10001,
                        "isPrimite": 0,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "test data type",
                        "updateTime": 1447153216000
                    }
                ],
                "outputs": [
                    {
                        "id": 13318,
                        "name": "code",
                        "type": 10002,
                        "isPrimite": 0,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1447153216000
                    },
                    {
                        "id": 13319,
                        "name": "msg",
                        "type": 10001,
                        "isPrimite": 0,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1447153216000
                    },
                    {
                        "id": 13320,
                        "name": "result",
                        "type": 10001,
                        "isPrimite": 0,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1447153216000
                    }
                ],
                "updateTime": 1447153216000
            },
            {
                "id": 10668,
                "name": "获取项目组列表",
                "description": "",
                "path": "/api/projGroup/getProList",
                "method": 1,
                "isRest": 0,
                "inputs": [],
                "outputs": [
                    {
                        "id": 13297,
                        "name": "code",
                        "type": 10002,
                        "isPrimite": 0,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446790999000
                    },
                    {
                        "id": 13298,
                        "name": "msg",
                        "type": 10001,
                        "isPrimite": 0,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446790999000
                    },
                    {
                        "id": 13299,
                        "name": "result",
                        "type": 10542,
                        "isPrimite": 0,
                        "typeName": "ProjectGroup",
                        "isSysType": 0,
                        "isArray": 1,
                        "description": "",
                        "updateTime": 1446791451000
                    }
                ],
                "updateTime": 1447040016000
            },
            {
                "id": 10669,
                "name": "获取用户组列表",
                "description": "获取用户组",
                "path": "/api/usrGroup/list",
                "method": 1,
                "isRest": 0,
                "inputs": [
                    {
                        "id": 13300,
                        "name": "userId",
                        "type": 10002,
                        "isPrimite": 0,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "用户id",
                        "updateTime": 1446791603000
                    }
                ],
                "outputs": [
                    {
                        "id": 13301,
                        "name": "code",
                        "type": 10002,
                        "isPrimite": 0,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446791603000
                    },
                    {
                        "id": 13302,
                        "name": "msg",
                        "type": 10001,
                        "isPrimite": 0,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "",
                        "updateTime": 1446791603000
                    },
                    {
                        "id": 13303,
                        "name": "result",
                        "type": 10001,
                        "isPrimite": 0,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 1,
                        "description": "",
                        "updateTime": 1446791603000
                    }
                ],
                "updateTime": 1447040025000
            }
        ],
        "templates": [
            {
                "id": 10200,
                "path": "/page/index.ftl",
                "name": "首页",
                "description": "首页",
                "parameters": [
                    {
                        "id": 10755,
                        "datatypeId": 10542,
                        "datatypeName": "ProjectGroup",
                        "projectId": 10597,
                        "name": "creatorId",
                        "originalType": 10002,
                        "type": 10002,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "创建者id",
                        "updateTime": 1447122101000
                    },
                    {
                        "id": 10756,
                        "datatypeId": 10542,
                        "datatypeName": "ProjectGroup",
                        "projectId": 10597,
                        "name": "creatorName",
                        "originalType": 10001,
                        "type": 10001,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "创建者姓名",
                        "updateTime": 1447122101000
                    },
                    {
                        "id": 10757,
                        "datatypeId": 10542,
                        "datatypeName": "ProjectGroup",
                        "projectId": 10597,
                        "name": "fromUsrGroup",
                        "originalType": 10001,
                        "type": 10001,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "是否来自用户组",
                        "updateTime": 1447122101000
                    },
                    {
                        "id": 10758,
                        "datatypeId": 10542,
                        "datatypeName": "ProjectGroup",
                        "projectId": 10597,
                        "name": "id",
                        "originalType": 10002,
                        "type": 10002,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "项目组id",
                        "updateTime": 1447122101000
                    },
                    {
                        "id": 10759,
                        "datatypeId": 10542,
                        "datatypeName": "ProjectGroup",
                        "projectId": 10597,
                        "name": "name",
                        "originalType": 10001,
                        "type": 10001,
                        "typeName": "String",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "项目组名称",
                        "updateTime": 1447122101000
                    },
                    {
                        "id": 10760,
                        "datatypeId": 10542,
                        "datatypeName": "ProjectGroup",
                        "projectId": 10597,
                        "name": "type",
                        "originalType": 10002,
                        "type": 10002,
                        "typeName": "Number",
                        "isSysType": 1,
                        "isArray": 0,
                        "description": "项目组类型：0是他人创建，1是自己创建",
                        "updateTime": 1447122101000
                    },
                    {
                        "id": 10761,
                        "datatypeId": 10542,
                        "datatypeName": "ProjectGroup",
                        "projectId": 10597,
                        "name": "projects",
                        "originalType": 10543,
                        "type": 10543,
                        "typeName": "Project",
                        "isSysType": 0,
                        "isArray": 1,
                        "description": "项目组中的项目列表",
                        "updateTime": 1447122101000
                    }
                ],
                "updateTime": 1447040856000
            },
            {
                "id": 10199,
                "path": "/page/test.ftl",
                "name": "Template",
                "description": "暂无",
                "parameters": [],
                "updateTime": 1447040819000
            }
        ],
        "datatypes": [
            {
                "id": 10003,
                "name": "Boolean",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10002,
                "name": "Number",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10001,
                "name": "String",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10000,
                "name": "Variable",
                "format": 0,
                "updateTime": 1438067940000
            },
            {
                "id": 10548,
                "name": "Interface",
                "format": 0,
                "updateTime": 1446793643000
            },
            {
                "id": 10545,
                "name": "Member",
                "format": 0,
                "updateTime": 1446791714000
            },
            {
                "id": 10543,
                "name": "Project",
                "format": 0,
                "updateTime": 1446791432000
            },
            {
                "id": 10542,
                "name": "ProjectGroup",
                "format": 0,
                "updateTime": 1446791438000
            },
            {
                "id": 10547,
                "name": "SearchParam",
                "format": 0,
                "updateTime": 1446793428000
            },
            {
                "id": 10544,
                "name": "UserGroup",
                "format": 0,
                "updateTime": 1446791689000
            }
        ],
        "attributes": [
            {
                "id": 10787,
                "name": "id",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10788,
                "name": "type",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10789,
                "name": "name",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10790,
                "name": "tag",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10791,
                "name": "path",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10792,
                "name": "method",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10793,
                "name": "isRest",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10794,
                "name": "description",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10795,
                "name": "projectId",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10796,
                "name": "progroupId",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10797,
                "name": "creatorId",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10798,
                "name": "updatorId",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10799,
                "name": "createTime",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10800,
                "name": "updateTime",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10801,
                "name": "username",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10802,
                "name": "creatorName",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10803,
                "name": "updatorName",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10804,
                "name": "projectName",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10548
            },
            {
                "id": 10775,
                "name": "uid",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10545
            },
            {
                "id": 10776,
                "name": "name",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10545
            },
            {
                "id": 10777,
                "name": "email",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10545
            },
            {
                "id": 10778,
                "name": "uGID",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10545
            },
            {
                "id": 10762,
                "name": "creatorId",
                "type": 10002,
                "isArray": 0,
                "description": "创建者id",
                "parentId": 10543
            },
            {
                "id": 10763,
                "name": "creatorName",
                "type": 10001,
                "isArray": 0,
                "description": "创建者姓名",
                "parentId": 10543
            },
            {
                "id": 10764,
                "name": "id",
                "type": 10002,
                "isArray": 0,
                "description": "项目id",
                "parentId": 10543
            },
            {
                "id": 10765,
                "name": "name",
                "type": 10001,
                "isArray": 0,
                "description": "项目名称",
                "parentId": 10543
            },
            {
                "id": 10766,
                "name": "qbsId",
                "type": 10002,
                "isArray": 0,
                "description": "qbs id",
                "parentId": 10543
            },
            {
                "id": 10767,
                "name": "type",
                "type": 10002,
                "isArray": 0,
                "description": "项目类型，1是公共资源库，0是创建的项目",
                "parentId": 10543
            },
            {
                "id": 10755,
                "name": "creatorId",
                "type": 10002,
                "isArray": 0,
                "description": "创建者id",
                "parentId": 10542
            },
            {
                "id": 10756,
                "name": "creatorName",
                "type": 10001,
                "isArray": 0,
                "description": "创建者姓名",
                "parentId": 10542
            },
            {
                "id": 10757,
                "name": "fromUsrGroup",
                "type": 10001,
                "isArray": 0,
                "description": "是否来自用户组",
                "parentId": 10542
            },
            {
                "id": 10758,
                "name": "id",
                "type": 10002,
                "isArray": 0,
                "description": "项目组id",
                "parentId": 10542
            },
            {
                "id": 10759,
                "name": "name",
                "type": 10001,
                "isArray": 0,
                "description": "项目组名称",
                "parentId": 10542
            },
            {
                "id": 10760,
                "name": "type",
                "type": 10002,
                "isArray": 0,
                "description": "项目组类型：0是他人创建，1是自己创建",
                "parentId": 10542
            },
            {
                "id": 10761,
                "name": "projects",
                "type": 10543,
                "isArray": 1,
                "description": "项目组中的项目列表",
                "parentId": 10542
            },
            {
                "id": 10780,
                "name": "pid",
                "type": 10001,
                "isArray": 0,
                "description": "项目id",
                "parentId": 10547
            },
            {
                "id": 10781,
                "name": "offset",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10547
            },
            {
                "id": 10782,
                "name": "limit",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10547
            },
            {
                "id": 10783,
                "name": "key",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10547
            },
            {
                "id": 10784,
                "name": "type",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10547
            },
            {
                "id": 10785,
                "name": "table",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10547
            },
            {
                "id": 10786,
                "name": "isExact",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10547
            },
            {
                "id": 10768,
                "name": "createTime",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10544
            },
            {
                "id": 10769,
                "name": "createUserID",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10544
            },
            {
                "id": 10770,
                "name": "description",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10544
            },
            {
                "id": 10771,
                "name": "uGroupName",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10544
            },
            {
                "id": 10772,
                "name": "updateTime",
                "type": 10001,
                "isArray": 0,
                "description": "",
                "parentId": 10544
            },
            {
                "id": 10773,
                "name": "usrGroupId",
                "type": 10002,
                "isArray": 0,
                "description": "",
                "parentId": 10544
            },
            {
                "id": 10774,
                "name": "members",
                "type": 10545,
                "isArray": 1,
                "description": "",
                "parentId": 10544
            }
        ],
        "project": {
            "id": 10597,
            "name": "勿删",
            "group": "测试"
        },
        "timestamp": 1447154077479
    }
}