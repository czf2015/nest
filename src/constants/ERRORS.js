module.exports = {
    ERR_400: [400, 'Bad Request'],
    ERR_401: [401, 'Unauthorized'],
    ERR_403: [403, `Forbidden: ${msg}`],
    ERR_404: [404, 'Not Found'],
    ERR_500: [500, 'Internal Server Error'],
    ERR_501: [501, 'Not Implemented'],
    ERR_503: [503, 'Service Unavailable'],
    ERR_504: [504, 'Gateway Timeout'],
    // 默认错误类型：主要用于重写错误描述（错误码）
    ERROR_DEFAULT: [-1, 'Default Error'],
    CONNECT_ERROR: [1, '连接服务器异常，请稍后重试'],
    CONNECT_TIMEOUT: [2, '连接服务器超时，请稍后重试'],
    SERVER_RESPONSE_ERROR: [3, '服务器响应错误，请稍后重试'],
    SERVER_RESPONSE_TIMEOUT: [4, '服务器响应超时，请稍后重试'],
    DB_CONNECT_FAILED: [5, 'DB 连接失败'],
    REQUIRE_DEVELIPER_PRIVILEGE: [6, `所进行的操作需要系统开发权限 :: ${msg}`],
    REQUIRE_MASTER_PRIVILEGE: [7, `所进行的操作需要系统管理员权限 :: ${msg}`],
    ERR_SYSTEM_NOT_EXIST: [101, '指定的系统不存在'],
    ERR_API_NOT_EXIST: [102, '所调用的 API 不存在'],
    ERR_API_INVALID_RESULT: [103, 'API 返回结果不准确'],
    ERR_PARAMETER_REQUIRED: [104, `缺少必要的参数：${msg}`],
}