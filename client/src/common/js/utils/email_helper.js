import time_helper from "@/common/js/utils/time_helper";

function commodity_approve_email(commodity, censor, owner) {
    let header = `尊敬的${owner.nickname}:\r\n`;
    let body = `恭喜，您的物品"${commodity.name}"（类别：${commodity.type}）已通过审核！快回来看看吧！\r\n`;
    let footer = `审核员：${censor.realname}\r\n${time_helper.convert_date_to_date_time_string(new Date())}`;
    return header + body + footer;
}

function commodity_reject_email(commodity, censor, owner, reason) {
    let header = `尊敬的${owner.nickname}:\r\n`;
    let body = `很遗憾，您的物品"${commodity.name}"（类别：${commodity.type}）未通过审核。\r\n请您按要求修改物品信息，重新提交审核。\r\n【驳回原因：${reason}】\r\n`;
    let footer = `审核员：${censor.realname}\r\n${time_helper.convert_date_to_date_time_string(new Date())}`;
    return header + body + footer;
}

function transaction_create_email(commodity, buyer, owner, detail) {
    let header = `尊敬的${owner.nickname}：\r\n`;
    let body = `有用户(${buyer.nickname})对您的物品"${commodity.name}"(类别：${commodity.type})提出了购买请求！快回来看看吧！\r\n`
    let postscript = `详情：${detail}\r\n`;
    let footer = `买家联系方式：\r\n电话：${buyer.tel}\r\nemail：${buyer.email}\r\nQQ：${buyer.QQ}\r\n请求时间：${time_helper.convert_date_to_date_time_string(new Date())}`;
    return header + body + postscript + footer;
}

function transaction_owner_reject_email(commodity, buyer, owner) {
    let header = `尊敬的${buyer.nickname}：\r\n`;
    let body = `很遗憾，物品卖家(${owner.nickname})拒绝了您对物品"${commodity.name}"(类别：${commodity.type})提出的购买请求。\r\n`;
    let footer = `卖家联系方式：\r\n电话：${owner.tel}\r\nemail：${owner.email}\r\nQQ：${owner.QQ}\r\n操作时间：${time_helper.convert_date_to_date_time_string(new Date())}`;
    return header + body + footer;
}

function transaction_owner_accept_email(commodity, buyer, owner) {
    let header = `尊敬的${buyer.nickname}：\r\n`;
    let body = `恭喜，物品卖家(${owner.nickname})已同意您对物品"${commodity.name}"(类别：${commodity.type})提出的购买请求，您现享有对该物品的所有权。快回来看看吧！\r\n`;
    let footer = `卖家联系方式：\r\n电话：${owner.tel}\r\nemail：${owner.email}\r\nQQ：${owner.QQ}\r\n操作时间：${time_helper.convert_date_to_date_time_string(new Date())}`;
    return header + body + footer;
}

function requirement_solution_email(commodity, requirement_creator, requirement, solver) {
    let header = `尊敬的${requirement_creator.nickname}：\r\n`;
    let body = `恭喜，用户(${solver.nickname})已使用物品"${commodity.name}"(类别：${commodity.type})解决了您关于${requirement.commodity_type}的需求，您现享有对该物品的所有权。快回来看看吧！\r\n`;
    let footer = `联系方式：\r\n电话：${solver.tel}\r\nemail：${solver.email}\r\nQQ：${solver.QQ}\r\n操作时间：${time_helper.convert_date_to_date_time_string(new Date())}`;
    return header + body + footer;
}

export default {
    commodity_approve_email,
    commodity_reject_email,
    transaction_create_email,
    transaction_owner_reject_email,
    transaction_owner_accept_email,
    requirement_solution_email
}