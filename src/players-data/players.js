/*
 *
 * Title: player list
 * Description: this file contain an array of players list and information
 * Author: Shah Arafat
 * Date: 01-03-2021
 *
 */

const data = [
  {
    id: 1,
    name: "Dale Steyn",
    country: "South Africa",
    price: 120000, 
    position: "Bowler",
    thumbnail: "https://i.postimg.cc/VdvyQLRH/dale-steyn.jpg",
    avatar:"https://i.postimg.cc/tTqVPKBC/dale-steyn.jpg",
    flag:"https://i.postimg.cc/5jfFbDDC/south-afrika.jpg"
  },
  {
    id:2,
    name: "Imran Tahir",
    country: "South Africa",
    price: 119200, 
    position: "Bowler",
    thumbnail: "https://i.postimg.cc/tZkcwLVj/imran-tahir.jpg",
    avatar:"",
    flag:"https://i.postimg.cc/5jfFbDDC/south-afrika.jpg"
  },
  {
    id:3,
    name: "Mohammad Nabi",
    country: "Afganistan",
    price: 108000, 
    position: "All-rounder",
    thumbnail: "https://i.postimg.cc/f3jqS6C9/mohammad-nabi.jpg",
    avatar:"https://i.postimg.cc/KvHrb8J7/imran-tahir.jpg",
    flag:"https://i.postimg.cc/52pD4bdx/afganistan.png"
  },
  {
    id: 4,
    name: "Taskin Ahmed",
    country: "Bangladesh",
    price: 109000, 
    position: "Bowler",
    thumbnail: "https://i.postimg.cc/jwxgHZ3k/taskin-ahmed.jpg",
    avatar:"https://i.postimg.cc/dtLr5Kwh/taskin-ahmed.jpg",
    flag:"https://i.postimg.cc/CZDfx0Fj/bangladesh.png"
  },
  {
    id:5,
    name: "Hardik Pandya",
    country: "India",
    price: 137800, 
    position: "All-rounder",
    thumbnail: "https://i.postimg.cc/vxmKs3W6/hardik-pandya.jpg",
    avatar:"https://i.postimg.cc/LX33Fkbh/hardik-pandya.jpg",
    flag:"https://i.postimg.cc/PPxp8YXf/india.png"
  },
  {
    id:6,
    name: "KL Rahul",
    country: "India",
    price: 151290, 
    position: "Wicket Keeper",
    thumbnail: "https://i.postimg.cc/94GKt4mz/kl-rahul.jpg",
    avatar:"https://i.postimg.cc/wMW57qHp/kl-rahul.jpg",
    flag:"https://i.postimg.cc/PPxp8YXf/india.png"
  },
  {
    id:7,
    name: "Pat Cummins",
    country: "Australia",
    price: 162300, 
    position: "Bowler",
    thumbnail: "https://i.postimg.cc/ZCCQssbG/pat-cummins.jpg",
    avatar:"https://i.postimg.cc/2544nFmT/pat-cummins.jpg",
    flag:"https://i.postimg.cc/rsxS81mv/australia.png"
  },
  {
    id:8,
    name: "Shakib Al Hasan",
    country: "Bangladesh",
    price: 210000, 
    position: "All-rounder",
    thumbnail: "https://i.postimg.cc/rRzfbzk1/shakib-al-hasan.jpg",
    avatar:"https://i.postimg.cc/SRKC0B9t/shakib-al-hasan.jpg",
    flag:"https://i.postimg.cc/CZDfx0Fj/bangladesh.png"
  },
  {
    id:9,
    name: "Mushfiqur Rahim",
    country: "Bangladesh",
    price: 150200, 
    position: "Wicket keeper",
    thumbnail: "https://i.postimg.cc/zL1PBJCN/mushfiqur-rahim.jpg",
    avatar:"https://i.postimg.cc/J4ncSkc4/mushfiqur-rahim.jpg",
    flag:"https://i.postimg.cc/CZDfx0Fj/bangladesh.png"
  },
  {
    id:10,
    name: "Rohit Sharma",
    country: "India",
    price: 181000, 
    position: "Batsman",
    thumbnail: "https://i.postimg.cc/6ygmkVTy/rohit-sharma.jpg",
    avatar:"https://i.postimg.cc/PxyYRXCw/rohit-sharma.jpg",
    flag:"https://i.postimg.cc/PPxp8YXf/india.png"
  },
  {
    id:11,
    name: "MS Dhoni",
    country: "India",
    price: 150800, 
    position: "Batsman",
    thumbnail: "https://i.postimg.cc/mP95BcFV/ms-dhoni.jpg",
    avatar:"https://i.postimg.cc/8ckBpF24/ms-dhoni.jpg",
    flag:"https://i.postimg.cc/PPxp8YXf/india.png"
  },
  {
    id:12,
    name: "Chris Gayle",
    country: "West Indies",
    price: 170000, 
    position: "Batsman",
    thumbnail: "https://i.postimg.cc/MnfhHPg7/chris-gayle.jpg",
    avatar:"https://i.postimg.cc/25FZ1kFK/chris-gayle.jpg",
    flag:"https://i.postimg.cc/cCxnNVp8/west-indies.jpg"
  },
  {
    id:13,
    name: "Virat Kohli",
    country: "India",
    price: 150800, 
    position: "Batsman",
    thumbnail: "https://i.postimg.cc/WhF9wDSj/virat-kohli.jpg",
    avatar:"https://i.postimg.cc/v8P57mFR/virat-kohli.jpg",
    flag:"https://i.postimg.cc/PPxp8YXf/india.png"
  },
  {
    id:14,
    name: "Steve Smith",
    country: "Australia",
    price: 137900, 
    position: "Batsman",
    thumbnail: "https://i.postimg.cc/QVMYVYTF/steven-smith.jpg",
    avatar:"https://i.postimg.cc/mk6MTmNZ/steven-smith.jpg",
    flag:"https://i.postimg.cc/rsxS81mv/australia.png"
  },
  {
    id:15,
    name: "Rashid Khan",
    country: "Afganistan",
    price: 182130, 
    position: "Bowler",
    thumbnail: "https://i.postimg.cc/c6DjmGS7/rashid-khan.jpg",
    avatar:"https://i.postimg.cc/VNyqSHyd/rashid-khan.jpg",
    flag:"https://i.postimg.cc/52pD4bdx/afganistan.png"
  },
  {
    id:16,
    name: "Mitchell Starc",
    country: "Australia",
    price: 102300, 
    position: "Bowler",
    thumbnail: "https://i.postimg.cc/V5spnL3L/mitchell-starc.jpg",
    avatar:"https://i.postimg.cc/2jT7HwWK/mitchell-starc.jpg",
    flag:"https://i.postimg.cc/rsxS81mv/australia.png"
  },
  {
    id:17,
    name: "Ross Taylor",
    country: "Newzeland",
    price: 113800, 
    position: "Batsman",
    thumbnail: "https://i.postimg.cc/nj3d0B6V/ross-taylor.jpg",
    avatar:"https://i.postimg.cc/sXs5mQgz/ross-taylor.jpg",
    flag:"https://i.postimg.cc/jCvn5Zrk/new-zeland.jpg"
  },
  {
    id:18,
    name: "Dawid Malan",
    country: "England",
    price: 200000, 
    position: "Batsman",
    thumbnail: "https://i.postimg.cc/7GwcBxh9/dawid-malan.jpg",
    avatar:"https://i.postimg.cc/ZRSxQsj1/dawid-malan.jpg",
    flag:"https://i.postimg.cc/ygyg0T3x/england.jpg"
  },
  {
    id:19,
    name: "Aaron Finch",
    country: "Australia",
    price: 182300, 
    position: "Batsman",
    thumbnail: "https://i.postimg.cc/2VKszR9j/aaron-finch.jpg",
    avatar:"https://i.postimg.cc/1zZFRn6F/aaron-finch.jpg",
    flag:"https://i.postimg.cc/rsxS81mv/australia.png"
  },
  {
    id:20,
    name: "Babar Azam",
    country: "Pakistan",
    price: 189000, 
    position: "Batsman",
    thumbnail: "https://i.postimg.cc/kVrLbNdk/babar-azam.jpg",
    avatar:"https://i.postimg.cc/YCFgwf4k/babar-azam.jpg",
    flag:"https://i.postimg.cc/47gHK0dj/pakistan.jpg"
  },
];

// export
export default data;