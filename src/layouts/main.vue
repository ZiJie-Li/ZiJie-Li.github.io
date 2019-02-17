<template>
    <div class="container">
        <section class="resume">
            <div class="profile">
                <div class="profile-warpper">
                    <div class="profile-warpper__logo">哩賀!</div>
                    <div class="profile-warpper__name">I'm 哩籽捷</div>
                    <div class="profile-warpper__job">Full Stack developer</div>
                </div>
            </div>
            <div class="avatar">
                <div class="avatar__photo" :style="'background-image: url(' + avatar + ')'"></div>
                <div class="avatar__slogan">不停努力，總有一天會被看見。</div>
            </div>
        </section>

        <section class="experience">
            <div class="row">
                <div class="col-xs-12 col-md-4" v-for="(experience, k) in experiences" :key="k">
                    <feature-box :subject="experience.subject" :list="experience.list"></feature-box>
                </div>
            </div>
        </section>

        <section class="project">
            <div class="card-row" v-for="(card, k) in cards" :key="k">
                <project-card :color="'black-gary'" :title="card.title" :tag="card.tag" :photo="card.photo" @on-click="onCardHref(card.url)">/<project-card>
            </div>
        </section>

    </div>
</template>

<script>
import avatar from '../../assets/images/lee2.JPG';
import photos from '../../assets/images/projects/*.png';

import FeatureBox from '../components/FeatureBox';
import ProjectCard from '../components/ProjectCard';

export default {
  name: "Main",
  data() {
    return {
        avatar: avatar,
        experiences: [
            {
                subject: '學歷經歷',
                list: [
                    {
                        title: '長榮大學 資訊管理學系 學士',
                        desc: '2007/9 ~ 2011/6'
                    },
                    {
                        title: '國立臺南大學 數位學習科技學系 碩士',
                        desc: '2011/9 ~ 2013/8'
                    },
                    {
                        title: '東指部砲一連通訊兵',
                        desc: '2013/10 ~ 2014/9'
                    },
                    {
                        title: '玩運彩資訊有限公司',
                        desc: '2014/10 ~ 2014/12'
                    },
                    {
                        title: '鈊保資訊有限公司',
                        desc: '2015/01 ~ 2017/03'
                    },
                    {
                        title: '高盛大股份有限公司',
                        desc: '2017/04 ~ 至今'
                    }
                ]
            },
            {
                subject: '技能專長',
                list: [
                    {
                        title: '網頁後端開發',
                        desc: 'PHP ( CodeIgniter、Laravel )、Node.js'
                    },
                    {
                        title: '網頁前端開發',
                        desc: 'HTML5、CSS3、JavaScript、SCSS、RWD、Bootstrap、jQuery、Gulp、Vue、Nuxt.js、Webpack'
                    },
                    {
                        title: '資料庫設計與管理',
                        desc: 'MySQL、Redis'
                    },
                    {
                        title: 'CI/CD',
                        desc: 'Jenkins'
                    },
                    {
                        title: '伺服器系統管理',
                        desc: 'Ubuntu、Windows Server、Apache、Nginx'
                    },
                    {
                        title: '學習中',
                        desc: 'Parcel、TypeScript'
                    }
                ]
            },
            {
                subject: '專業證照',
                list: [
                    {
                        title: '經濟部ITE資訊專業人員鑑定',
                        desc: '網路通訊類證照'
                    },
                    {
                        title: '中華專案管理學會',
                        desc: 'PMA專案助理證照'
                    },
                    {
                        title: '中華ERP學會',
                        desc: 'ERP初階人員證照'
                    },
                    {
                        title: 'SCJP',
                        desc: 'Java國際證照'
                    }
                ]
            }
        ],
        cards: [
            {
                title: 'CityPass 都會通',
                tag: 'FULL STACK',
                photo: photos.citypass_s,
                url: 'https://citypass.tw/zh-TW'
            },
            {
                title: '高盛大官網',
                tag: 'FRONT END',
                photo: photos.touchcity_s,
                url: 'https://www.touchcity.tw'
            },
            {
                title: '鈊保資訊官網',
                tag: 'FRONT END',
                photo: photos.sinpao_s,
                url: 'https://www.sinpao.com.tw'
            },
            {
                title: '社會實踐研究中心',
                tag: 'FULL STACK',
                photo: photos.usr_s,
                url: 'http://www.usr.yuntech.edu.tw/'
            },
            {
                title: '個人網站Version1',
                tag: 'FRONT END',
                photo: photos.lee_web_s,
                url: 'http://zijie-li.github.io/version1'
            },
            {
                title: '1999高雄一指通',
                tag: 'FULL STACK',
                photo: photos.app1999_s,
                url: 'https://app1999.kcg.gov.tw/'
            },
            {
                title: '高雄過好年',
                tag: 'FULL STACK',
                photo: photos.dagoshopping_s,
                url: 'http://dagoshopping.com'
            },
            {
                title: '2017屏東伴手禮暨好店徵選',
                tag: 'FULL STACK',
                photo: photos.ping_tung_s,
                url: 'http://pingtung-gift.ddns.net'
            },
            {
                title: '資料保護協會官網',
                tag: 'FRONT END',
                photo: photos.cdpa_s,
                url: 'https://www.cdpa.org.tw'
            },
            {
                title: '2016南瀛民俗藝術節',
                tag: 'FULL STACK',
                photo: photos.nyiff2016_s,
                url: 'http://nyiff.tnc.gov.tw/nyiff_2016/'
            },
            {
                title: '2017台南文化行春活動網站',
                tag: 'FRONT END',
                photo: photos.newyear2017_s,
                url: 'http://newyear.culture.tainan.gov.tw/2017/view/index.html'
            },
            {
                title: '2016台南文化行春活動網站',
                tag: 'FRONT END',
                photo: photos.newyear2016_s,
                url: 'http://newyear.culture.tainan.gov.tw/2016/'
            },
            {
                title: '台南藝術棧',
                tag: 'FULL STACK',
                photo: photos.arttainan_s,
                url: 'http://artstainan.tnc.gov.tw'
            },
            {
                title: '教育部網路守護天使網站',
                tag: 'FRONT END',
                photo: photos.nga_s,
                url: 'https://nga.moe.edu.tw'
            },
            {
                title: '不適合存取資訊過濾防制系統',
                tag: 'FULL STACK',
                photo: photos.twb_s,
                url: 'http://twb.moe.edu.tw'
            }
        ]
    };
  },
  methods: {
      onCardHref($url) {
          window.open($url, '_blank');
      }
  },
  components: {
      FeatureBox,
      ProjectCard
  }
};
</script>