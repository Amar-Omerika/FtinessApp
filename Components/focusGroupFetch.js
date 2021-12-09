import Arms from "../Screens/Arms";
import Chest from "../Screens/Chest";
import Abs from "../Screens/Abs";
import Legs from "../Screens/Legs";
import Back from "../Screens/Back";
import Shoulder from "../Screens/Shoulder";
const SECTIONS = [
	{
		title: "The most popular",

		data: [
			{
				key: "1",
				text: "Arms Workouts",
				uri: "https://i.pinimg.com/564x/70/7e/12/707e12b584c9715e6c48846d636edcb1.jpg",
				screen: Arms,
			},
			{
				key: "2",
				text: "Chest Workouts",
				uri: "https://i.pinimg.com/564x/2f/bb/47/2fbb477973d6562882381a3fa59d81ce.jpg",
				screen: Chest,
			},
		],
	},
	{
		title: "The most performed",
		data: [
			{
				key: "1",
				text: "Abs Workouts",
				uri: "https://i.pinimg.com/564x/11/16/fa/1116fa3c662309c5020cdb7e580923a9.jpg",
				screen: Abs,
			},
			{
				key: "2",
				text: "Legs Workouts",
				uri: "https://i.pinimg.com/564x/41/05/f9/4105f9b6e29927159d78062b1a810194.jpg",
				screen: Legs,
			},
		],
	},
	{
		title: "Others",
		data: [
			{
				key: "1",
				text: "Back Workouts",
				uri: "https://i.pinimg.com/564x/cb/db/0c/cbdb0cbfe52f8ce664cb3013005c9fcb.jpg",
				screen: Back,
			},
			{
				key: "2",
				text: "Shoulder Workouts",
				uri: "https://i.pinimg.com/564x/8a/74/a9/8a74a94b5130c8a726e774984ff2395e.jpg",
				screen: Shoulder,
			},
		],
	},
];
export default SECTIONS;
