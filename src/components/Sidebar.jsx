import { RiDashboard3Line } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FiPieChart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-50 border-r">
      <div className="text-2xl font-bold py-6 px-4">
      <svg width="98" height="42" viewBox="0 0 98 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.3166 35.3838C45.3642 35.3838 44.4575 35.2234 43.5967 34.9027C42.7358 34.582 42.0215 34.0831 41.4537 33.406C40.9042 32.7467 40.6112 31.8914 40.5745 30.8401H43.8439C43.9355 31.3034 44.1919 31.6241 44.6132 31.8023C45.0528 31.9983 45.529 32.0963 46.0419 32.0963C46.3716 32.0963 46.6829 32.0607 46.976 31.9894C47.2873 31.936 47.5804 31.8825 47.8551 31.8291V35.17C47.5804 35.2056 47.3148 35.2501 47.0584 35.3036C46.8203 35.3571 46.573 35.3838 46.3166 35.3838ZM41.7834 30.0116C40.3731 30.0116 39.1276 29.878 38.0469 29.6107C36.9846 29.3434 36.0871 28.8534 35.3545 28.1407C34.6401 27.428 34.0998 26.4123 33.7335 25.0938C33.3855 23.7752 33.2115 22.0558 33.2115 19.9354C33.2115 17.8329 33.3946 16.1223 33.761 14.8038C34.1273 13.4674 34.6676 12.4429 35.3819 11.7301C36.0963 11.0174 36.9846 10.5274 38.0469 10.2601C39.1276 9.97506 40.3731 9.83251 41.7834 9.83251C43.212 9.83251 44.4575 9.97506 45.5199 10.2601C46.6005 10.5274 47.498 11.0174 48.2123 11.7301C48.9266 12.4429 49.4578 13.4674 49.8058 14.8038C50.1721 16.1223 50.3553 17.8329 50.3553 19.9354C50.3553 22.0558 50.1721 23.7752 49.8058 25.0938C49.4578 26.4123 48.9175 27.428 48.1848 28.1407C47.4705 28.8534 46.5822 29.3434 45.5199 29.6107C44.4575 29.878 43.212 30.0116 41.7834 30.0116ZM41.7834 25.8689C42.5343 25.8689 43.1571 25.7887 43.6516 25.6283C44.1462 25.4501 44.5308 25.1561 44.8055 24.7463C45.0986 24.3187 45.3001 23.7218 45.41 22.9556C45.5382 22.1716 45.6023 21.1649 45.6023 19.9354C45.6023 18.6703 45.5382 17.6458 45.41 16.8618C45.3001 16.0778 45.0986 15.4809 44.8055 15.0711C44.5308 14.6434 44.1462 14.3583 43.6516 14.2158C43.1571 14.0554 42.5343 13.9752 41.7834 13.9752C41.0507 13.9752 40.4372 14.0554 39.9426 14.2158C39.4481 14.3583 39.0543 14.6434 38.7612 15.0711C38.4865 15.4809 38.285 16.0778 38.1568 16.8618C38.0286 17.6458 37.9645 18.6703 37.9645 19.9354C37.9645 21.1649 38.0194 22.1716 38.1293 22.9556C38.2575 23.7218 38.459 24.3187 38.7338 24.7463C39.0268 25.1561 39.4206 25.4501 39.9152 25.6283C40.4097 25.7887 41.0324 25.8689 41.7834 25.8689Z" fill="black"/>
<path d="M56.9518 30.0116C55.6514 30.0116 54.6257 29.6285 53.8748 28.8623C53.1421 28.0783 52.7758 27.0181 52.7758 25.6818V15.472H57.5288V24.2385C57.5288 24.9156 57.6937 25.37 58.0233 25.6016C58.353 25.8332 58.7835 25.9491 59.3146 25.9491C59.6809 25.9491 60.1022 25.86 60.5784 25.6818C61.0729 25.5036 61.4759 25.2809 61.7873 25.0136V15.472H66.5128V29.8512H62.584L61.7873 28.4347C61.1462 28.8267 60.4044 29.192 59.5619 29.5305C58.7377 29.8512 57.8676 30.0116 56.9518 30.0116Z" fill="black"/>
<path d="M74.0862 36.1856L75.5973 29.8512C74.6449 29.8512 73.8389 29.682 73.1796 29.3434C72.5202 29.0049 71.9799 28.5416 71.5586 27.9536C71.1556 27.3478 70.8534 26.644 70.6519 25.8421L68.1518 15.472H73.0697L75.0478 24.9067C75.1211 25.174 75.2126 25.3878 75.3225 25.5481C75.4324 25.7085 75.5515 25.8332 75.6797 25.9223C75.8262 25.9936 75.9636 26.0471 76.0918 26.0827C76.22 26.1005 76.3299 26.1094 76.4215 26.1094L78.6744 15.472H83.5098L79.4436 33.5396L78.0699 36.1856H74.0862Z" fill="black"/>
<path d="M90.0514 29.9314C88.9525 29.9314 88.0367 29.7621 87.304 29.4236C86.5714 29.0672 86.0311 28.5416 85.683 27.8467C85.335 27.1518 85.161 26.2698 85.161 25.2007V9.45833H89.914V24.4791C89.914 24.9245 89.9598 25.2809 90.0514 25.5481C90.143 25.8154 90.2895 26.0203 90.491 26.1629C90.6925 26.2876 90.9489 26.3767 91.2603 26.4301L92.2493 26.5638V29.9314H90.0514Z" fill="black"/>
<path d="M94.5932 29.9047C94.1903 29.9047 93.9888 29.7087 93.9888 29.3167V26.3767C93.9888 25.9669 94.1903 25.762 94.5932 25.762H97.3406C97.7802 25.762 98 25.9669 98 26.3767V29.3167C98 29.5305 97.9359 29.682 97.8077 29.7711C97.6978 29.8601 97.5421 29.9047 97.3406 29.9047H94.5932Z" fill="black"/>
<path d="M24.9411 7.79886C25.0455 10.8739 24.9583 13.8835 24.125 16.8294C23.0452 20.6466 21.0098 23.917 18.1154 26.6824C16.2274 28.4866 13.9918 29.8108 11.6452 30.968C10.0916 31.7345 8.59676 32.5968 7.18456 33.5888C5.24436 34.9516 3.63391 36.6292 2.31027 38.5593C1.60252 39.5912 0.96944 40.6706 0.300018 41.7276C0.23856 41.8246 0.157939 41.9094 0.0859081 42C0.0574924 41.9839 0.0290766 41.9679 0 41.9518C0.163886 41.5168 0.315878 41.078 0.492981 40.6481C1.9554 37.1066 3.70859 33.7032 5.69439 30.4141C8.13616 26.3701 10.9169 22.5536 14.0797 19.0185C16.4342 16.3867 18.9123 13.8584 21.3614 11.3076C22.4584 10.1652 23.6188 9.08133 24.7508 7.9717C24.803 7.9203 24.8605 7.87211 24.9411 7.79886Z" fill="black"/>
<path d="M4.90007 28.3523C4.87892 27.5215 4.83729 26.6908 4.84059 25.86C4.85381 23.0303 5.58865 20.3806 6.99689 17.9082C7.97624 16.1888 9.27874 14.7149 10.7227 13.3528C14.0414 10.2237 17.3567 7.09145 20.6794 3.96625C22.0315 2.69407 23.3974 1.43474 24.7574 0.170267C24.8089 0.122078 24.8691 0.0822421 24.9735 0C24.9735 0.137498 24.9735 0.218455 24.9735 0.299413C24.9735 1.70138 24.9788 3.104 24.9682 4.50597C24.9675 4.63832 24.9087 4.80345 24.8162 4.89662C22.7035 7.01885 20.5697 9.1218 18.4656 11.2524C15.6287 14.1238 12.838 17.0382 10.3592 20.2155C8.88224 22.109 7.50507 24.0706 6.28782 26.135C5.85167 26.8752 5.41287 27.6141 4.97474 28.3536H4.89875L4.90007 28.3523Z" fill="#0A0A0A"/>
</svg>
      </div>
      <ul className="space-y-4 p-2">
        <li className="p-2 rounded flex items-center gap-2 font-bold text-gray-400 text-xl cursor-pointer hover:bg-gray-300 hover:text-gray-700">
            <RiDashboard3Line /> Dashboard
        </li>
        <li className="p-2 rounded flex items-center gap-2 font-bold bg-gray-300 text-gray-700 text-xl cursor-pointer">
            <PiNotebookFill /> Students
        </li>
        <li className="p-2 rounded flex items-center gap-2 font-bold text-gray-400 text-xl cursor-pointer hover:bg-gray-300 hover:text-gray-700">
            <FaBookBookmark /> Chapter
        </li>
        <li className="p-2 rounded flex items-center gap-2 font-bold text-gray-400 text-xl cursor-pointer hover:bg-gray-300 hover:text-gray-700">
            <IoIosHelpCircleOutline /> Help
        </li>
        <li className="p-2 rounded flex items-center gap-2 font-bold text-gray-400 text-xl cursor-pointer hover:bg-gray-300 hover:text-gray-700">
            <FiPieChart /> Reports
        </li>
        <li className="p-2 rounded flex items-center gap-2 font-bold text-gray-400 text-xl cursor-pointer hover:bg-gray-300 hover:text-gray-700">
            <IoSettingsOutline /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
