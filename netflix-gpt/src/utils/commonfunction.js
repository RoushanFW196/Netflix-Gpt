import {notification} from "antd";


// type = success | info | warning | error
export const openNotificationWithIcon = (type, msg, duration = 5) => {
	let upperCaseTitle = <h4 className={"notify-" + type}>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
	notification.config({
		getContainer() {
			return document.body;
		}
	});
	notification.destroy()
	notification[type]({
		message: upperCaseTitle,
		description: msg,
		duration: duration
	});
};