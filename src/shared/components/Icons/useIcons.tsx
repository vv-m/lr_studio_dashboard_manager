interface IUseIcons {
  isActive?: boolean;
  color?: string;
}

const useIcons = ({ isActive, color }: IUseIcons): Record<string, JSX.Element> => {
  const fillColor = isActive ? '#5CFB20' : 'white';

  return {
    RabGrafik: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 14C18.2652 14 18.5196 14.1054 18.7071 14.2929C18.8946 14.4804 19 14.7348 19 15V17H21C21.2652 17 21.5196 17.1054 21.7071 17.2929C21.8946 17.4804 22 17.7348 22 18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H19V21C19 21.2652 18.8946 21.5196 18.7071 21.7071C18.5196 21.8946 18.2652 22 18 22C17.7348 22 17.4804 21.8946 17.2929 21.7071C17.1054 21.5196 17 21.2652 17 21V19H15C14.7348 19 14.4804 18.8946 14.2929 18.7071C14.1054 18.5196 14 18.2652 14 18C14 17.7348 14.1054 17.4804 14.2929 17.2929C14.4804 17.1054 14.7348 17 15 17H17V15C17 14.7348 17.1054 14.4804 17.2929 14.2929C17.4804 14.1054 17.7348 14 18 14ZM16 3C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4V5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V11C21 11.2652 20.8946 11.5196 20.7071 11.7071C20.5196 11.8946 20.2652 12 20 12H5V19H11C11.2652 19 11.5196 19.1054 11.7071 19.2929C11.8946 19.4804 12 19.7348 12 20C12 20.2652 11.8946 20.5196 11.7071 20.7071C11.5196 20.8946 11.2652 21 11 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H7V4C7 3.73478 7.10536 3.48043 7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4V5H15V4C15 3.73478 15.1054 3.48043 15.2929 3.29289C15.4804 3.10536 15.7348 3 16 3ZM19 7H5V10H19V7Z"
          fill={color ?? fillColor}
        />
      </svg>
    ),
    Sdelki: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.4971 3.99667C5.28995 3.94201 5.07209 3.94263 4.86525 3.99848C4.65842 4.05432 4.46985 4.16343 4.31836 4.31492C4.16686 4.46641 4.05775 4.65499 4.00191 4.86182C3.94607 5.06866 3.94544 5.28652 4.0001 5.49367L5.2641 10.2837L2.5801 14.4497C2.0721 15.2397 2.6041 16.2837 3.5421 16.3367L8.4881 16.6147L11.6201 20.4527C11.7555 20.6187 11.9322 20.7462 12.1323 20.8226C12.3324 20.899 12.5491 20.9216 12.7607 20.8881C12.9723 20.8546 13.1714 20.7662 13.3382 20.6317C13.505 20.4972 13.6335 20.3214 13.7111 20.1217L15.1081 16.5217L19.7161 21.1297C19.9036 21.3173 20.158 21.4228 20.4233 21.4229C20.6885 21.423 20.943 21.3177 21.1306 21.1302C21.3182 20.9427 21.4237 20.6883 21.4238 20.423C21.4239 20.1578 21.3186 19.9033 21.1311 19.7157L16.5231 15.1077L20.1221 13.7107C20.3218 13.6331 20.4977 13.5045 20.6322 13.3378C20.7666 13.171 20.8551 12.9719 20.8885 12.7603C20.922 12.5487 20.8995 12.332 20.8231 12.1319C20.7466 11.9317 20.6191 11.7551 20.4531 11.6197L16.6151 8.48667L16.3371 3.54067C16.3249 3.32692 16.2568 3.1201 16.1397 2.94085C16.0226 2.7616 15.8606 2.61616 15.6698 2.51903C15.479 2.42191 15.2661 2.37649 15.0522 2.38731C14.8384 2.39812 14.6311 2.46479 14.4511 2.58067L10.2871 5.25967L5.4971 3.99667ZM7.2851 10.1037L6.2731 6.27067L10.1071 7.28167C10.4391 7.36967 10.7931 7.31367 11.0831 7.12767L14.4161 4.98067L14.6391 8.93967C14.6581 9.28267 14.8211 9.60167 15.0871 9.81967L18.1591 12.3267L14.4631 13.7617C14.1431 13.8857 13.8891 14.1397 13.7641 14.4597L12.3291 18.1567L9.8221 15.0847C9.71463 14.9528 9.58088 14.8448 9.42937 14.7675C9.27786 14.6902 9.11192 14.6453 8.9421 14.6357L4.9831 14.4137L7.1301 11.0797C7.3161 10.7907 7.3721 10.4367 7.2851 10.1037Z"
          fill={fillColor}
        />
      </svg>
    ),
    Servis: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.586 2.75745C15.9611 2.38251 16.4697 2.17188 17 2.17188C17.5303 2.17188 18.0389 2.38251 18.414 2.75745L21.243 5.58645C21.6179 5.9615 21.8286 6.47012 21.8286 7.00045C21.8286 7.53078 21.6179 8.03939 21.243 8.41445L18.414 11.2434C18.0389 11.6184 17.5303 11.829 17 11.829C16.4697 11.829 15.9611 11.6184 15.586 11.2434L12.757 8.41445C12.3821 8.03939 12.1714 7.53078 12.1714 7.00045C12.1714 6.47012 12.3821 5.9615 12.757 5.58645L15.586 2.75745ZM17 4.17245L14.172 7.00045L17 9.82845L19.828 7.00045L17 4.17245ZM9 3.00045C9.53043 3.00045 10.0391 3.21116 10.4142 3.58623C10.7893 3.96131 11 4.47002 11 5.00045V9.00045C11 9.53088 10.7893 10.0396 10.4142 10.4147C10.0391 10.7897 9.53043 11.0004 9 11.0004H5C4.46957 11.0004 3.96086 10.7897 3.58579 10.4147C3.21071 10.0396 3 9.53088 3 9.00045V5.00045C3 4.47002 3.21071 3.96131 3.58579 3.58623C3.96086 3.21116 4.46957 3.00045 5 3.00045H9ZM9 5.00045H5V9.00045H9V5.00045ZM21 15.0004C21 14.47 20.7893 13.9613 20.4142 13.5862C20.0391 13.2112 19.5304 13.0004 19 13.0004H15C14.4696 13.0004 13.9609 13.2112 13.5858 13.5862C13.2107 13.9613 13 14.47 13 15.0004V19.0004C13 19.5309 13.2107 20.0396 13.5858 20.4147C13.9609 20.7897 14.4696 21.0004 15 21.0004H19C19.5304 21.0004 20.0391 20.7897 20.4142 20.4147C20.7893 20.0396 21 19.5309 21 19.0004V15.0004ZM19 15.0004V19.0004H15V15.0004H19ZM9 13.0004C9.53043 13.0004 10.0391 13.2112 10.4142 13.5862C10.7893 13.9613 11 14.47 11 15.0004V19.0004C11 19.5309 10.7893 20.0396 10.4142 20.4147C10.0391 20.7897 9.53043 21.0004 9 21.0004H5C4.46957 21.0004 3.96086 20.7897 3.58579 20.4147C3.21071 20.0396 3 19.5309 3 19.0004V15.0004C3 14.47 3.21071 13.9613 3.58579 13.5862C3.96086 13.2112 4.46957 13.0004 5 13.0004H9ZM9 15.0004H5V19.0004H9V15.0004Z"
          fill={fillColor}
        />
      </svg>
    ),
    Statistics: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM11 4.062C8.98271 4.31868 7.13885 5.33387 5.84319 6.90122C4.54752 8.46857 3.89728 10.4705 4.02462 12.5C4.15196 14.5296 5.04733 16.4345 6.52874 17.8276C8.01016 19.2207 9.96645 19.9975 12 20C13.9486 20 15.8302 19.2888 17.2917 18C18.7533 16.7112 19.6942 14.9333 19.938 13H12C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V4.062ZM13 4.062V11H19.938C19.7154 9.23761 18.9129 7.59934 17.6568 6.34324C16.4007 5.08713 14.7624 4.28459 13 4.062Z"
          fill={fillColor}
        />
      </svg>
    ),
    Zvonki: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.172 15.8295C12.017 19.6745 15.58 20.0955 16.626 20.1345C17.89 20.1805 19.18 19.1485 19.738 18.0915C18.848 17.0475 17.689 16.2375 16.42 15.3595C15.671 16.1075 14.748 17.4975 13.519 16.9995C12.82 16.7185 11.094 15.9235 9.586 14.4145C8.077 12.9065 7.283 11.1805 7 10.4825C6.502 9.25146 7.896 8.32646 8.645 7.57746C7.767 6.28746 6.971 5.09846 5.929 4.25346C4.857 4.81346 3.819 6.09346 3.866 7.37446C3.905 8.42046 4.326 11.9835 8.172 15.8295ZM16.552 22.1335C15.112 22.0805 11.031 21.5165 6.757 17.2435C2.484 12.9695 1.921 8.88946 1.867 7.44846C1.787 5.25246 3.469 3.11946 5.412 2.28646C5.64598 2.18543 5.9022 2.14696 6.15553 2.17484C6.40886 2.20271 6.65059 2.29597 6.857 2.44546C8.465 3.61846 9.574 5.39546 10.527 6.78746C10.7252 7.07691 10.8161 7.42656 10.7837 7.7759C10.7514 8.12525 10.598 8.4523 10.35 8.70046L8.994 10.0575C9.309 10.7525 9.95 11.9505 11 13.0005C12.05 14.0505 13.248 14.6915 13.944 15.0065L15.299 13.6505C15.5481 13.4019 15.8765 13.2487 16.227 13.2175C16.5775 13.1862 16.9278 13.2789 17.217 13.4795C18.637 14.4635 20.305 15.5565 21.521 17.1135C21.6826 17.3214 21.7854 17.5689 21.8187 17.8301C21.8519 18.0913 21.8144 18.3567 21.71 18.5985C20.873 20.5515 18.755 22.2145 16.552 22.1335Z"
          fill={fillColor}
        />
      </svg>
    ),
    Arrow: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7071 15.7073C12.5196 15.8948 12.2653 16.0001 12.0001 16.0001C11.7349 16.0001 11.4806 15.8948 11.2931 15.7073L5.6361 10.0503C5.54059 9.9581 5.46441 9.84775 5.412 9.72575C5.35959 9.60374 5.332 9.47252 5.33085 9.33974C5.32969 9.20696 5.355 9.07529 5.40528 8.95239C5.45556 8.82949 5.52981 8.71784 5.6237 8.62395C5.7176 8.53006 5.82925 8.4558 5.95214 8.40552C6.07504 8.35524 6.20672 8.32994 6.3395 8.33109C6.47228 8.33225 6.6035 8.35983 6.7255 8.41224C6.84751 8.46465 6.95785 8.54083 7.0501 8.63634L12.0001 13.5863L16.9501 8.63634C17.1387 8.45418 17.3913 8.35339 17.6535 8.35567C17.9157 8.35795 18.1665 8.46312 18.3519 8.64852C18.5373 8.83393 18.6425 9.08474 18.6448 9.34694C18.6471 9.60914 18.5463 9.86174 18.3641 10.0503L12.7071 15.7073Z"
          fill="white"
          fillOpacity="0.4"
        />
      </svg>
    ),
    Dot: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
          fill={fillColor}
        />
      </svg>
    ),
    Info: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.16669 14.1665H10.8334V9.1665H9.16669V14.1665ZM10 7.49984C10.2361 7.49984 10.434 7.41998 10.5938 7.26025C10.7535 7.10053 10.8334 6.90262 10.8334 6.6665C10.8334 6.43039 10.7535 6.23248 10.5938 6.07275C10.434 5.91303 10.2361 5.83317 10 5.83317C9.76391 5.83317 9.56599 5.91303 9.40627 6.07275C9.24655 6.23248 9.16669 6.43039 9.16669 6.6665C9.16669 6.90262 9.24655 7.10053 9.40627 7.26025C9.56599 7.41998 9.76391 7.49984 10 7.49984ZM10 18.3332C8.84724 18.3332 7.76391 18.1144 6.75002 17.6769C5.73613 17.2394 4.85419 16.6457 4.10419 15.8957C3.35419 15.1457 2.76044 14.2637 2.32294 13.2498C1.88544 12.2359 1.66669 11.1526 1.66669 9.99984C1.66669 8.84706 1.88544 7.76373 2.32294 6.74984C2.76044 5.73595 3.35419 4.854 4.10419 4.104C4.85419 3.354 5.73613 2.76025 6.75002 2.32275C7.76391 1.88525 8.84724 1.6665 10 1.6665C11.1528 1.6665 12.2361 1.88525 13.25 2.32275C14.2639 2.76025 15.1459 3.354 15.8959 4.104C16.6459 4.854 17.2396 5.73595 17.6771 6.74984C18.1146 7.76373 18.3334 8.84706 18.3334 9.99984C18.3334 11.1526 18.1146 12.2359 17.6771 13.2498C17.2396 14.2637 16.6459 15.1457 15.8959 15.8957C15.1459 16.6457 14.2639 17.2394 13.25 17.6769C12.2361 18.1144 11.1528 18.3332 10 18.3332ZM10 16.6665C11.8611 16.6665 13.4375 16.0207 14.7292 14.729C16.0209 13.4373 16.6667 11.8609 16.6667 9.99984C16.6667 8.13873 16.0209 6.56234 14.7292 5.27067C13.4375 3.979 11.8611 3.33317 10 3.33317C8.13891 3.33317 6.56252 3.979 5.27085 5.27067C3.97919 6.56234 3.33335 8.13873 3.33335 9.99984C3.33335 11.8609 3.97919 13.4373 5.27085 14.729C6.56252 16.0207 8.13891 16.6665 10 16.6665Z"
          fill="#B6BAC3"
        />
      </svg>
    ),
    Height: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3334 4C11.1566 4 10.987 4.07024 10.862 4.19526C10.737 4.32029 10.6667 4.48986 10.6667 4.66667C10.6667 4.84348 10.737 5.01305 10.862 5.13807C10.987 5.2631 11.1566 5.33333 11.3334 5.33333H12.3907L9.33339 8.39067L6.80472 5.862C6.6797 5.73702 6.51016 5.66681 6.33339 5.66681C6.15661 5.66681 5.98707 5.73702 5.86205 5.862L1.52872 10.1953C1.46505 10.2568 1.41426 10.3304 1.37932 10.4117C1.34438 10.4931 1.32599 10.5805 1.32522 10.6691C1.32445 10.7576 1.34132 10.8454 1.37484 10.9273C1.40836 11.0092 1.45786 11.0837 1.52046 11.1463C1.58305 11.2089 1.65749 11.2584 1.73942 11.2919C1.82135 11.3254 1.90914 11.3423 1.99766 11.3415C2.08617 11.3407 2.17365 11.3223 2.25499 11.2874C2.33633 11.2525 2.40989 11.2017 2.47139 11.138L6.33339 7.276L8.86205 9.80467C8.98707 9.92965 9.15661 9.99986 9.33339 9.99986C9.51016 9.99986 9.6797 9.92965 9.80472 9.80467L13.3334 6.276V7.33333C13.3334 7.51014 13.4036 7.67971 13.5287 7.80474C13.6537 7.92976 13.8232 8 14.0001 8C14.1769 8 14.3464 7.92976 14.4715 7.80474C14.5965 7.67971 14.6667 7.51014 14.6667 7.33333V4.66667C14.6667 4.48986 14.5965 4.32029 14.4715 4.19526C14.3464 4.07024 14.1769 4 14.0001 4H11.3334Z"
          fill="#2AB500"
        />
      </svg>
    ),
    Fall: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3906 10.6666H11.3332C11.1564 10.6666 10.9869 10.7369 10.8618 10.8619C10.7368 10.9869 10.6666 11.1565 10.6666 11.3333C10.6666 11.5101 10.7368 11.6797 10.8618 11.8047C10.9869 11.9297 11.1564 11.9999 11.3332 11.9999H13.9999C14.1767 11.9999 14.3463 11.9297 14.4713 11.8047C14.5963 11.6797 14.6666 11.5101 14.6666 11.3333V8.66661C14.6666 8.4898 14.5963 8.32023 14.4713 8.19521C14.3463 8.07018 14.1767 7.99995 13.9999 7.99995C13.8231 7.99995 13.6535 8.07018 13.5285 8.19521C13.4035 8.32023 13.3332 8.4898 13.3332 8.66661V9.72395L9.80457 6.19528C9.67955 6.0703 9.51001 6.00009 9.33324 6.00009C9.15646 6.00009 8.98692 6.0703 8.86191 6.19528L6.33324 8.72395L2.47124 4.86195C2.3455 4.74051 2.1771 4.67331 2.0023 4.67483C1.82751 4.67635 1.6603 4.74646 1.53669 4.87007C1.41309 4.99367 1.34297 5.16088 1.34146 5.33568C1.33994 5.51048 1.40713 5.67888 1.52857 5.80461L5.86191 10.1379C5.98692 10.2629 6.15646 10.3331 6.33324 10.3331C6.51001 10.3331 6.67955 10.2629 6.80457 10.1379L9.33324 7.60928L12.3906 10.6666Z"
          fill="#F03006"
        />
      </svg>
    ),
    Done: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3333 9.99984C18.3333 5.39734 14.6025 1.6665 9.99996 1.6665C5.39746 1.6665 1.66663 5.39734 1.66663 9.99984C1.66663 14.6023 5.39746 18.3332 9.99996 18.3332C14.6025 18.3332 18.3333 14.6023 18.3333 9.99984ZM8.82079 11.109L12.9458 6.984C13.1022 6.82764 13.3142 6.73979 13.5354 6.73979C13.7565 6.73979 13.9686 6.82764 14.125 6.984C14.2813 7.14037 14.3692 7.35245 14.3692 7.57359C14.3692 7.79472 14.2813 8.0068 14.125 8.16317L9.46996 12.8182C9.38483 12.9033 9.28376 12.9709 9.17252 13.017C9.06128 13.0631 8.94204 13.0868 8.82163 13.0868C8.70121 13.0868 8.58198 13.0631 8.47073 13.017C8.35949 12.9709 8.25842 12.9033 8.17329 12.8182L5.87496 10.5198C5.7187 10.3635 5.63096 10.1514 5.63104 9.93038C5.63112 9.70932 5.71901 9.49734 5.87538 9.34109C6.03174 9.18483 6.24378 9.09709 6.46484 9.09717C6.57429 9.09721 6.68267 9.1188 6.78378 9.16073C6.88489 9.20265 6.97676 9.26408 7.05413 9.3415L8.82079 11.109Z"
          fill="#36D000"
        />
      </svg>
    ),
    RedCross: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9998 13.4141L17.6568 19.0711C17.8454 19.2533 18.098 19.3541 18.3602 19.3518C18.6224 19.3495 18.8732 19.2444 19.0586 19.059C19.2441 18.8736 19.3492 18.6227 19.3515 18.3606C19.3538 18.0984 19.253 17.8458 19.0708 17.6571L13.4138 12.0001L19.0708 6.34315C19.253 6.15455 19.3538 5.90194 19.3515 5.63975C19.3492 5.37755 19.2441 5.12674 19.0586 4.94133C18.8732 4.75592 18.6224 4.65075 18.3602 4.64848C18.098 4.6462 17.8454 4.74699 17.6568 4.92915L11.9998 10.5861L6.34282 4.92915C6.15337 4.75149 5.90224 4.65451 5.64255 4.65873C5.38287 4.66295 5.13502 4.76803 4.95143 4.95174C4.76785 5.13546 4.66294 5.38339 4.65891 5.64307C4.65488 5.90276 4.75203 6.15382 4.92982 6.34315L10.5858 12.0001L4.92882 17.6571C4.83331 17.7494 4.75713 17.8597 4.70472 17.9817C4.65231 18.1037 4.62473 18.235 4.62357 18.3677C4.62242 18.5005 4.64772 18.6322 4.698 18.7551C4.74828 18.878 4.82254 18.9897 4.91643 19.0835C5.01032 19.1774 5.12197 19.2517 5.24487 19.302C5.36777 19.3523 5.49944 19.3776 5.63222 19.3764C5.765 19.3752 5.89622 19.3477 6.01823 19.2953C6.14023 19.2428 6.25058 19.1667 6.34282 19.0711L11.9998 13.4141Z"
          fill="#FF5821"
        />
      </svg>
    ),
    Outbox: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.297 7.05C15.204 7.14287 15.1303 7.25316 15.0799 7.37456C15.0296 7.49596 15.0037 7.62608 15.0037 7.7575C15.0037 7.88892 15.0296 8.01904 15.0799 8.14044C15.1303 8.26184 15.204 8.37213 15.297 8.465L17.833 11H9C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13H17.833L15.297 15.536C15.1095 15.7236 15.0042 15.9781 15.0043 16.2434C15.0044 16.5086 15.1099 16.763 15.2975 16.9505C15.4851 17.138 15.7396 17.2433 16.0049 17.2432C16.2701 17.2431 16.5245 17.1376 16.712 16.95L20.954 12.707C21.1415 12.5195 21.2468 12.2652 21.2468 12C21.2468 11.7348 21.1415 11.4805 20.954 11.293L16.712 7.05C16.6191 6.95702 16.5088 6.88326 16.3874 6.83294C16.266 6.78262 16.1359 6.75671 16.0045 6.75671C15.8731 6.75671 15.743 6.78262 15.6216 6.83294C15.5002 6.88326 15.3899 6.95702 15.297 7.05ZM3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19V5C5 4.73478 4.89464 4.48043 4.70711 4.29289C4.51957 4.10536 4.26522 4 4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V19Z"
          fill="#36D000"
        />
      </svg>
    ),
    Inbox: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.25259 14.1253C7.33007 14.0479 7.39154 13.956 7.43347 13.8549C7.47541 13.7537 7.49699 13.6453 7.49699 13.5357C7.49699 13.4262 7.47541 13.3178 7.43347 13.2166C7.39154 13.1155 7.33007 13.0236 7.25259 12.9462L5.13926 10.8337H12.5001C12.7211 10.8337 12.9331 10.7459 13.0893 10.5896C13.2456 10.4333 13.3334 10.2213 13.3334 10.0003C13.3334 9.77931 13.2456 9.56735 13.0893 9.41107C12.9331 9.25479 12.7211 9.16699 12.5001 9.16699H5.13926L7.25259 7.05366C7.40885 6.89729 7.49659 6.68526 7.49651 6.4642C7.49643 6.24314 7.40854 6.03117 7.25217 5.87491C7.09581 5.71865 6.88377 5.63091 6.66271 5.63099C6.44165 5.63107 6.22968 5.71896 6.07342 5.87533L2.53842 9.41116C2.3822 9.56743 2.29443 9.77936 2.29443 10.0003C2.29443 10.2213 2.3822 10.4332 2.53842 10.5895L6.07342 14.1253C6.15082 14.2028 6.24272 14.2643 6.34389 14.3062C6.44505 14.3481 6.55349 14.3697 6.66301 14.3697C6.77252 14.3697 6.88096 14.3481 6.98212 14.3062C7.08329 14.2643 7.17519 14.2028 7.25259 14.1253ZM17.5001 5.00033C17.5001 4.77931 17.4123 4.56735 17.256 4.41107C17.0997 4.25479 16.8878 4.16699 16.6668 4.16699C16.4457 4.16699 16.2338 4.25479 16.0775 4.41107C15.9212 4.56735 15.8334 4.77931 15.8334 5.00033V15.0003C15.8334 15.2213 15.9212 15.4333 16.0775 15.5896C16.2338 15.7459 16.4457 15.8337 16.6668 15.8337C16.8878 15.8337 17.0997 15.7459 17.256 15.5896C17.4123 15.4333 17.5001 15.2213 17.5001 15.0003V5.00033Z"
          fill="#2FB8FF"
        />
      </svg>
    ),
    SortUp: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.293 3.4653C17.4651 3.29298 17.6941 3.18936 17.9371 3.17389C18.1802 3.15843 18.4205 3.23218 18.613 3.3813L18.707 3.4653L21.535 6.2933C21.7143 6.47326 21.8185 6.71473 21.8262 6.96868C21.834 7.22263 21.7448 7.47001 21.5768 7.66058C21.4087 7.85114 21.1744 7.9706 20.9215 7.9947C20.6686 8.01879 20.416 7.94571 20.215 7.7903L20.121 7.7073L19 6.5863V19.0003C18.9997 19.2552 18.9021 19.5003 18.7272 19.6857C18.5522 19.871 18.313 19.9825 18.0586 19.9975C17.8042 20.0124 17.5536 19.9296 17.3582 19.766C17.1627 19.6024 17.0371 19.3704 17.007 19.1173L17 19.0003V6.5863L15.879 7.7073C15.6995 7.88855 15.4574 7.99433 15.2025 8.00298C14.9475 8.01163 14.6988 7.9225 14.5074 7.75383C14.316 7.58517 14.1963 7.34971 14.1728 7.09568C14.1493 6.84164 14.2238 6.58822 14.381 6.3873L14.464 6.2933L17.293 3.4653ZM13 18.0003C13.2549 18.0006 13.5 18.0982 13.6854 18.2731C13.8707 18.4481 13.9822 18.6873 13.9972 18.9417C14.0121 19.1961 13.9293 19.4467 13.7657 19.6421C13.6021 19.8376 13.3701 19.9632 13.117 19.9933L13 20.0003H4C3.74512 20 3.49997 19.9024 3.31463 19.7275C3.1293 19.5525 3.01777 19.3133 3.00283 19.0589C2.98789 18.8045 3.07067 18.5539 3.23426 18.3585C3.39786 18.163 3.6299 18.0374 3.883 18.0073L4 18.0003H13ZM13 11.0003C13.2652 11.0003 13.5196 11.1057 13.7071 11.2932C13.8946 11.4807 14 11.7351 14 12.0003C14 12.2655 13.8946 12.5199 13.7071 12.7074C13.5196 12.8949 13.2652 13.0003 13 13.0003H4C3.73478 13.0003 3.48043 12.8949 3.29289 12.7074C3.10536 12.5199 3 12.2655 3 12.0003C3 11.7351 3.10536 11.4807 3.29289 11.2932C3.48043 11.1057 3.73478 11.0003 4 11.0003H13ZM11 4.0003C11.2652 4.0003 11.5196 4.10566 11.7071 4.29319C11.8946 4.48073 12 4.73508 12 5.0003C12 5.26552 11.8946 5.51987 11.7071 5.70741C11.5196 5.89494 11.2652 6.0003 11 6.0003H4C3.73478 6.0003 3.48043 5.89494 3.29289 5.70741C3.10536 5.51987 3 5.26552 3 5.0003C3 4.73508 3.10536 4.48073 3.29289 4.29319C3.48043 4.10566 3.73478 4.0003 4 4.0003H11Z"
          fill="#25272C"
        />
      </svg>
    ),
    SortDown: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 4C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V17.414L20.121 16.293C20.2138 16.2001 20.3241 16.1264 20.4454 16.0761C20.5667 16.0258 20.6968 15.9998 20.8281 15.9998C20.9595 15.9998 21.0896 16.0256 21.2109 16.0758C21.3323 16.126 21.4426 16.1997 21.5355 16.2925C21.6284 16.3853 21.7021 16.4956 21.7524 16.6169C21.8027 16.7382 21.8287 16.8683 21.8287 16.9996C21.8287 17.131 21.8029 17.2611 21.7527 17.3824C21.7025 17.5038 21.6288 17.6141 21.536 17.707L18.707 20.535C18.5195 20.7225 18.2652 20.8278 18 20.8278C17.7348 20.8278 17.4805 20.7225 17.293 20.535L14.465 17.707C14.3695 17.6148 14.2933 17.5044 14.2409 17.3824C14.1885 17.2604 14.1609 17.1292 14.1597 16.9964C14.1586 16.8636 14.1839 16.7319 14.2342 16.609C14.2845 16.4862 14.3587 16.3745 14.4526 16.2806C14.5465 16.1867 14.6581 16.1125 14.781 16.0622C14.9039 16.0119 15.0356 15.9866 15.1684 15.9877C15.3012 15.9889 15.4324 16.0165 15.5544 16.0689C15.6764 16.1213 15.7868 16.1975 15.879 16.293L17 17.414V5C17 4.73478 17.1054 4.48043 17.2929 4.29289C17.4804 4.10536 17.7348 4 18 4ZM11 18C11.2549 18.0003 11.5 18.0979 11.6854 18.2728C11.8707 18.4478 11.9822 18.687 11.9972 18.9414C12.0121 19.1958 11.9293 19.4464 11.7657 19.6418C11.6021 19.8373 11.3701 19.9629 11.117 19.993L11 20H4C3.74512 19.9997 3.49997 19.9021 3.31463 19.7272C3.1293 19.5522 3.01777 19.313 3.00283 19.0586C2.98789 18.8042 3.07067 18.5536 3.23426 18.3582C3.39786 18.1627 3.6299 18.0371 3.883 18.007L4 18H11ZM13 11C13.2549 11.0003 13.5 11.0979 13.6854 11.2728C13.8707 11.4478 13.9822 11.687 13.9972 11.9414C14.0121 12.1958 13.9293 12.4464 13.7657 12.6418C13.6021 12.8373 13.3701 12.9629 13.117 12.993L13 13H4C3.74512 12.9997 3.49997 12.9021 3.31463 12.7272C3.1293 12.5522 3.01777 12.313 3.00283 12.0586C2.98789 11.8042 3.07067 11.5536 3.23426 11.3582C3.39786 11.1627 3.6299 11.0371 3.883 11.007L4 11H13ZM13 4C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5C14 5.26522 13.8946 5.51957 13.7071 5.70711C13.5196 5.89464 13.2652 6 13 6H4C3.73478 6 3.48043 5.89464 3.29289 5.70711C3.10536 5.51957 3 5.26522 3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H13Z"
          fill="#25272C"
        />
      </svg>
    ),
    Reset: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 8.99967C4.24493 8.9997 4.48134 9.08963 4.66437 9.25239C4.84741 9.41515 4.96434 9.63942 4.993 9.88267L5 9.99967V10.9997C4.99994 12.5521 5.60157 14.044 6.67847 15.1621C7.75536 16.2803 9.22371 16.9375 10.775 16.9957L11 16.9997H14.586L13.793 16.2067C13.6137 16.0267 13.5095 15.7852 13.5018 15.5313C13.494 15.2773 13.5832 15.03 13.7512 14.8394C13.9193 14.6488 14.1536 14.5294 14.4065 14.5053C14.6594 14.4812 14.912 14.5543 15.113 14.7097L15.207 14.7927L17.707 17.2927C17.8578 17.4428 17.9563 17.6373 17.988 17.8477L18 18.0097C17.9982 18.2295 17.9236 18.4426 17.788 18.6157L17.703 18.7107L15.207 21.2067C15.027 21.386 14.7856 21.4901 14.5316 21.4979C14.2777 21.5057 14.0303 21.4165 13.8397 21.2484C13.6492 21.0804 13.5297 20.8461 13.5056 20.5932C13.4815 20.3403 13.5546 20.0877 13.71 19.8867L13.793 19.7927L14.586 18.9997H11C8.92157 18.9996 6.92474 18.1907 5.4323 16.7442C3.93985 15.2977 3.06895 13.3271 3.004 11.2497L3 10.9997V9.99967C3 9.73445 3.10536 9.4801 3.29289 9.29256C3.48043 9.10503 3.73478 8.99967 4 8.99967ZM8.793 2.79267C8.97296 2.61332 9.21443 2.5092 9.46838 2.50144C9.72233 2.49369 9.96971 2.58289 10.1603 2.75092C10.3508 2.91895 10.4703 3.15322 10.4944 3.40615C10.5185 3.65907 10.4454 3.91168 10.29 4.11267L10.207 4.20667L9.414 4.99967H13C15.0784 4.9997 17.0753 5.80861 18.5677 7.25514C20.0602 8.70167 20.931 10.6723 20.996 12.7497L21 12.9997V13.9997C20.9997 14.2546 20.9021 14.4997 20.7272 14.685C20.5522 14.8704 20.313 14.9819 20.0586 14.9968C19.8042 15.0118 19.5536 14.929 19.3582 14.7654C19.1627 14.6018 19.0371 14.3698 19.007 14.1167L19 13.9997V12.9997C19.0001 11.4473 18.3984 9.95531 17.3215 8.8372C16.2446 7.71909 14.7763 7.06189 13.225 7.00367L13 6.99967H9.414L10.207 7.79267C10.3863 7.97263 10.4905 8.21411 10.4982 8.46805C10.506 8.722 10.4168 8.96938 10.2488 9.15995C10.0807 9.35051 9.84645 9.46998 9.59353 9.49407C9.3406 9.51816 9.08799 9.44508 8.887 9.28967L8.793 9.20667L6.293 6.70667C6.12082 6.53448 6.01739 6.30538 6.00211 6.06235C5.98683 5.81933 6.06075 5.57907 6.21 5.38667L6.293 5.29267L8.793 2.79267Z"
          fill="#6B7280"
        />
      </svg>
    ),
    GreenCheck: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2120_333)">
          <rect width="16" height="16" rx="4" fill="#36D000" />
          <path
            fillRule="evenodd"
            clipPath="evenodd"
            d="M12.95 5.79546C13.0455 5.70321 13.1217 5.59287 13.1741 5.47086C13.2265 5.34886 13.2541 5.21764 13.2553 5.08486C13.2564 4.95208 13.2311 4.8204 13.1808 4.69751C13.1306 4.57461 13.0563 4.46296 12.9624 4.36906C12.8685 4.27517 12.7569 4.20092 12.634 4.15064C12.5111 4.10036 12.3794 4.07506 12.2466 4.07621C12.1138 4.07736 11.9826 4.10495 11.8606 4.15736C11.7386 4.20977 11.6283 4.28595 11.536 4.38146L6.58603 9.33146L4.46503 7.21046C4.37218 7.11755 4.26195 7.04384 4.14061 6.99353C4.01928 6.94322 3.88923 6.9173 3.75788 6.91726C3.49261 6.91716 3.23817 7.02245 3.05053 7.20996C2.86289 7.39747 2.75742 7.65184 2.75732 7.91711C2.75723 8.18238 2.86252 8.43682 3.05003 8.62446L5.80803 11.3825C5.91018 11.4847 6.03146 11.5657 6.16496 11.621C6.29845 11.6764 6.44153 11.7048 6.58603 11.7048C6.73052 11.7048 6.87361 11.6764 7.0071 11.621C7.14059 11.5657 7.26188 11.4847 7.36403 11.3825L12.95 5.79546Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2120_333">
            <rect width="16" height="16" rx="4" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    RedCheck: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2120_116)">
          <rect width="16" height="16" rx="4" fill="#FF5821" />
          <path
            fillRule="evenodd"
            clipPath="evenodd"
            d="M12.95 5.79546C13.0455 5.70321 13.1217 5.59287 13.1741 5.47086C13.2265 5.34886 13.2541 5.21764 13.2553 5.08486C13.2564 4.95208 13.2311 4.8204 13.1808 4.69751C13.1306 4.57461 13.0563 4.46296 12.9624 4.36906C12.8685 4.27517 12.7569 4.20092 12.634 4.15064C12.5111 4.10036 12.3794 4.07506 12.2466 4.07621C12.1138 4.07736 11.9826 4.10495 11.8606 4.15736C11.7386 4.20977 11.6283 4.28595 11.536 4.38146L6.58603 9.33146L4.46503 7.21046C4.37218 7.11755 4.26195 7.04384 4.14061 6.99353C4.01928 6.94322 3.88923 6.9173 3.75788 6.91726C3.49261 6.91716 3.23817 7.02245 3.05053 7.20996C2.86289 7.39747 2.75742 7.65184 2.75732 7.91711C2.75723 8.18238 2.86252 8.43682 3.05003 8.62446L5.80803 11.3825C5.91018 11.4847 6.03146 11.5657 6.16496 11.621C6.29845 11.6764 6.44153 11.7048 6.58603 11.7048C6.73052 11.7048 6.87361 11.6764 7.0071 11.621C7.14059 11.5657 7.26188 11.4847 7.36403 11.3825L12.95 5.79546Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2120_116">
            <rect width="16" height="16" rx="4" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    BlueCheck: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2120_343)">
          <rect width="16" height="16" rx="4" fill="#2FB8FF" />
          <path
            fillRule="evenodd"
            clipPath="evenodd"
            d="M12.95 5.79546C13.0455 5.70321 13.1217 5.59287 13.1741 5.47086C13.2265 5.34886 13.2541 5.21764 13.2553 5.08486C13.2564 4.95208 13.2311 4.8204 13.1808 4.69751C13.1306 4.57461 13.0563 4.46296 12.9624 4.36906C12.8685 4.27517 12.7569 4.20092 12.634 4.15064C12.5111 4.10036 12.3794 4.07506 12.2466 4.07621C12.1138 4.07736 11.9826 4.10495 11.8606 4.15736C11.7386 4.20977 11.6283 4.28595 11.536 4.38146L6.58603 9.33146L4.46503 7.21046C4.37218 7.11755 4.26195 7.04384 4.14061 6.99353C4.01928 6.94322 3.88923 6.9173 3.75788 6.91726C3.49261 6.91716 3.23817 7.02245 3.05053 7.20996C2.86289 7.39747 2.75742 7.65184 2.75732 7.91711C2.75723 8.18238 2.86252 8.43682 3.05003 8.62446L5.80803 11.3825C5.91018 11.4847 6.03146 11.5657 6.16496 11.621C6.29845 11.6764 6.44153 11.7048 6.58603 11.7048C6.73052 11.7048 6.87361 11.6764 7.0071 11.621C7.14059 11.5657 7.26188 11.4847 7.36403 11.3825L12.95 5.79546Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2120_343">
            <rect width="16" height="16" rx="4" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    XCross: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9993 13.4141L17.6563 19.0711C17.8449 19.2533 18.0975 19.3541 18.3597 19.3518C18.6219 19.3495 18.8727 19.2444 19.0582 19.059C19.2436 18.8736 19.3487 18.6227 19.351 18.3606C19.3533 18.0984 19.2525 17.8458 19.0703 17.6571L13.4133 12.0001L19.0703 6.34315C19.2525 6.15455 19.3533 5.90194 19.351 5.63975C19.3487 5.37755 19.2436 5.12674 19.0582 4.94133C18.8727 4.75592 18.6219 4.65075 18.3597 4.64848C18.0975 4.6462 17.8449 4.74699 17.6563 4.92915L11.9993 10.5861L6.34233 4.92915C6.15288 4.75149 5.90175 4.65451 5.64207 4.65873C5.38238 4.66295 5.13453 4.76803 4.95094 4.95174C4.76736 5.13546 4.66245 5.38339 4.65842 5.64307C4.65439 5.90276 4.75155 6.15382 4.92933 6.34315L10.5853 12.0001L4.92833 17.6571C4.83282 17.7494 4.75664 17.8597 4.70423 17.9817C4.65182 18.1037 4.62424 18.235 4.62308 18.3677C4.62193 18.5005 4.64723 18.6322 4.69751 18.7551C4.74779 18.878 4.82205 18.9897 4.91594 19.0835C5.00983 19.1774 5.12148 19.2517 5.24438 19.302C5.36728 19.3523 5.49896 19.3776 5.63174 19.3764C5.76452 19.3752 5.89574 19.3477 6.01774 19.2953C6.13974 19.2428 6.25009 19.1667 6.34233 19.0711L11.9993 13.4141Z"
          fill="#8E95A2"
        />
      </svg>
    ),
    ThreeDots: (
      <svg
        width="16"
        height="4"
        viewBox="0 0 16 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 0.5C2.39782 0.5 2.77936 0.658035 3.06066 0.93934C3.34196 1.22064 3.5 1.60218 3.5 2C3.5 2.39782 3.34196 2.77936 3.06066 3.06066C2.77936 3.34196 2.39782 3.5 2 3.5C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5ZM8 0.5C8.39782 0.5 8.77936 0.658035 9.06066 0.93934C9.34196 1.22064 9.5 1.60218 9.5 2C9.5 2.39782 9.34196 2.77936 9.06066 3.06066C8.77936 3.34196 8.39782 3.5 8 3.5C7.60218 3.5 7.22064 3.34196 6.93934 3.06066C6.65804 2.77936 6.5 2.39782 6.5 2C6.5 1.60218 6.65804 1.22064 6.93934 0.93934C7.22064 0.658035 7.60218 0.5 8 0.5ZM14 0.5C14.3978 0.5 14.7794 0.658035 15.0607 0.93934C15.342 1.22064 15.5 1.60218 15.5 2C15.5 2.39782 15.342 2.77936 15.0607 3.06066C14.7794 3.34196 14.3978 3.5 14 3.5C13.6022 3.5 13.2206 3.34196 12.9393 3.06066C12.658 2.77936 12.5 2.39782 12.5 2C12.5 1.60218 12.658 1.22064 12.9393 0.93934C13.2206 0.658035 13.6022 0.5 14 0.5Z"
          fill="#25272C"
        />
      </svg>
    ),
    StatusOk: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12ZM10.585 13.331L15.535 8.381C15.7226 8.19336 15.9771 8.08794 16.2425 8.08794C16.5079 8.08794 16.7624 8.19336 16.95 8.381C17.1376 8.56864 17.2431 8.82314 17.2431 9.0885C17.2431 9.35386 17.1376 9.60836 16.95 9.796L11.364 15.382C11.2618 15.4842 11.1406 15.5653 11.0071 15.6206C10.8736 15.6759 10.7305 15.7044 10.586 15.7044C10.4415 15.7044 10.2984 15.6759 10.1649 15.6206C10.0314 15.5653 9.91015 15.4842 9.808 15.382L7.05 12.624C6.86249 12.4364 6.7572 12.1819 6.7573 11.9166C6.75739 11.6514 6.86286 11.397 7.0505 11.2095C7.23814 11.022 7.49258 10.9167 7.75785 10.9168C7.8892 10.9168 8.01926 10.9428 8.14059 10.9931C8.26192 11.0434 8.37216 11.1171 8.465 11.21L10.585 13.331Z"
          fill="#36D000"
        />
      </svg>
    ),
    StatusFailed: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM9.879 8.464C9.69946 8.28275 9.45743 8.17697 9.20245 8.16832C8.94748 8.15967 8.69883 8.2488 8.50742 8.41747C8.31601 8.58613 8.1963 8.82159 8.1728 9.07562C8.14929 9.32966 8.22378 9.58308 8.381 9.784L8.465 9.879L10.585 11.999L8.465 14.121C8.28375 14.3005 8.17797 14.5426 8.16932 14.7975C8.16067 15.0525 8.2498 15.3012 8.41847 15.4926C8.58713 15.684 8.82258 15.8037 9.07662 15.8272C9.33066 15.8507 9.58408 15.7762 9.785 15.619L9.879 15.536L12 13.414L14.121 15.536C14.3005 15.7173 14.5426 15.823 14.7975 15.8317C15.0525 15.8403 15.3012 15.7512 15.4926 15.5825C15.684 15.4139 15.8037 15.1784 15.8272 14.9244C15.8507 14.6703 15.7762 14.4169 15.619 14.216L15.536 14.121L13.414 12L15.536 9.879C15.7173 9.69946 15.823 9.45743 15.8317 9.20245C15.8403 8.94748 15.7512 8.69883 15.5825 8.50742C15.4139 8.31601 15.1784 8.1963 14.9244 8.1728C14.6703 8.14929 14.4169 8.22378 14.216 8.381L14.121 8.464L12 10.586L9.879 8.464Z"
          fill="#FF5821"
        />
      </svg>
    ),
    LeftLine: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.91049 10.5893C6.75427 10.433 6.6665 10.2211 6.6665 10.0001C6.6665 9.77915 6.75427 9.56723 6.91049 9.41096L11.6247 4.69679C11.7015 4.6172 11.7935 4.55371 11.8952 4.51004C11.9968 4.46636 12.1062 4.44338 12.2168 4.44241C12.3275 4.44145 12.4372 4.46254 12.5396 4.50444C12.642 4.54634 12.7351 4.60822 12.8133 4.68646C12.8916 4.7647 12.9534 4.85775 12.9953 4.96016C13.0372 5.06257 13.0583 5.17231 13.0574 5.28296C13.0564 5.39361 13.0334 5.50296 12.9897 5.60463C12.9461 5.7063 12.8826 5.79825 12.803 5.87512L8.67799 10.0001L12.803 14.1251C12.9548 14.2823 13.0388 14.4928 13.0369 14.7113C13.035 14.9298 12.9473 15.1388 12.7928 15.2933C12.6383 15.4478 12.4293 15.5355 12.2108 15.5374C11.9923 15.5393 11.7818 15.4553 11.6247 15.3035L6.91049 10.5893Z"
          fill="#8E95A2"
        />
      </svg>
    ),
    RightLine: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0888 9.41098C13.245 9.56726 13.3328 9.77918 13.3328 10.0002C13.3328 10.2211 13.245 10.433 13.0888 10.5893L8.37463 15.3035C8.29776 15.3831 8.20581 15.4466 8.10414 15.4902C8.00247 15.5339 7.89312 15.5569 7.78247 15.5579C7.67182 15.5588 7.56209 15.5377 7.45967 15.4958C7.35726 15.4539 7.26422 15.3921 7.18597 15.3138C7.10773 15.2356 7.04585 15.1425 7.00395 15.0401C6.96205 14.9377 6.94096 14.828 6.94193 14.7173C6.94289 14.6067 6.96588 14.4973 7.00955 14.3956C7.05322 14.294 7.11671 14.202 7.1963 14.1252L11.3213 10.0002L7.1963 5.87515C7.0445 5.71798 6.96051 5.50748 6.96241 5.28898C6.9643 5.07049 7.05195 4.86147 7.20645 4.70697C7.36096 4.55246 7.56997 4.46482 7.78847 4.46292C8.00696 4.46102 8.21747 4.54502 8.37463 4.69682L13.0888 9.41098Z"
          fill="#8E95A2"
        />
      </svg>
    ),
  };
};

export default useIcons;
