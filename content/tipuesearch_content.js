var tipuesearch = {"pages": [{'title': '有關本網站', 'text': '本網站是由虎尾科技大學精密機械工程科學生製作。 \n 總共使用兩套網際內容管理系統: \n https://github.com/mdecourse/cmsimde \n https://www.blogger.com/ \n 本人的倉儲: https://github.com/50833103/wcmj2020 \n \n', 'tags': '', 'url': '有關本網站.html'}, {'title': '主題', 'text': '', 'tags': '', 'url': '主題.html'}, {'title': 'W1', 'text': '[2001:288:6004:17::53]:3128 \n 140.130.17.50:3128 \n tcp / ip ==傳輸控制協議/互聯網協議 \n 港口\xa0 \n date 資料 \n transmit 傳輸 \n control 控制 \n version=edition 版本 \n super computer 超級電腦 \n batch computation 批次運算 \n mainframe 伺服器主機 \n server 伺服器 \n cluster 叢集 \n 個人電腦 \n 微控制器 \n 移動電話 \n IPv4 version4 IP4個區段用.區隔 \n IPv6 version4 IP6個區段用:區隔 \n 140.130.17.254(系gateway通道) \n 140.130.1.*(學校主幹) \n NAT網絡地址轉換 \n internal network(內部網路)192.168.* \n ip address mapping 對應 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'D6', 'text': '在線教育 \n 線上直播: Youtube + Portable OBS \n 線上開會: \xa0 https://meet.google.com \xa0 \n \n 讓手機可以利用電腦熱點上網 \n 採用\xa0 https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn725n/ \n 將此一 USB Wifi adapter 連接電腦後, 若網路為 IPv4 協定時, 可以透過"設定 -> 網路和網際網路 -> 行動熱點", 選擇開啟並編輯"網路名稱與網路密碼"後, 讓至多 8 台手機透過熱點連線上網. \n 但是因為目前 Windows 10 並 未提供 IPv6 網路協定下的網路熱點功能 , 因此在純 IPv6 網路協定下無法使用"行動熱點"服務. \n \n 利用手機鏡頭當作 webcam: \n Android： https ： //www.digitalcitizen.life/turn-android-smartphone-webcam-windows  iPhone： https ： //www.makeuseof.com/tag/use-your-iphone-as-a-webcam-heres-how -ios / \xa0 \xa0 \xa0 \xa0 \n \n 需要 clone 個人倉儲時: \n git clone --recurse-submodules 倉儲_url.git \n 例如: git clone --recurse-submodules  https://github.com/mdecourse/wcmj2020.git \xa0 \n 現場直播的 audio 錄音設定 \n 在電腦輔助設計室進行直播時, 由於現場有擴音設備, 因此採用 OBS 串流至 Youtube 的最佳收音並非從 Webcam 的麥克風, 而是從擴音器以 audio outpu 連接到電腦的麥克風插槽, 然後將 OBS 的 audio 設定為從電腦的麥克風收音 \n', 'tags': '', 'url': 'D6.html'}, {'title': 'W7', 'text': '下載可攜式系統 \n \n 利用 git 指令建立 cmsimde 網站 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '請重新下載 \xa0 wcmj2020_tool.7z \xa0檔案大小為 435 MB, 解開壓縮後為 1.8 GB (其中包括 Mypaint, Dia 與 OBS 等). \n 學會利用 ShareX 與 OBS 拍攝螢幕操作影片, 並將個人維護倉儲與網站的過程影片放入個人網站中 \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': '電腦軟硬體簡介', 'text': '\n \n \n \n \n \n 機殼 \n 容納和保護主機營體的主機殼 \n \n 中央處理器(CPU) \n 又稱為電腦的心臟，而CPU主要工作是算術、運輯運算，解讀電腦內的每個指令來控制運作。 \n  電源(Power) \n \n 是提供內接式元件電力來源的組件，他將市電轉換為直流電供給其他元件使用。 \n \n \n 主機板 \n \n 主機板的功能主要在承戴其插卡，所有電腦裡的東西都會接到主機板 ，它們之間要相互的傳資料也是經過主機板，之後再傳到對方，簡單的來說，它就像一個轉運站一樣。  \n \n 顯示卡(VGA ) \n \n 顯示卡在電腦中主要作用就是把電腦計算出來的文字與圖形表現在顯示器上。 \n \n \n 音效卡 \n 可說是現在多媒體電腦的必備元件之一，負責電腦音訊的處理。 \n \n \n 記憶體(RAM) \n 記憶體的主要功用是暫存資料，當它被使用時，系統可以從RAM上存取資料。 \n \n \n 硬碟 \n 硬碟就是電腦中負責儲存資料的工具，電腦中的大小資料均可以在此找到。 \n \n', 'tags': '', 'url': '電腦軟硬體簡介.html'}, {'title': '網路架構與設定簡介', 'text': '\n 網路架構模型分為4層，也就是經常聽到的DoD（Department of Defense）或是TCP/IP模型，如附圖所示，最上層為應用層（Application \xa0Layer），接下來依據為傳輸層（Transport Layer）、網路層（Internet Layer）、鏈結層（Link\xa0Layer）。這4層分 工需要相互合作，卻又彼此獨立。 \n 應用層（Application Layer） \n 網路模型的最上層，也是想要利用網路傳輸資料的程式，能夠直接碰觸到的層級。無論是收發郵件的POP3/SMTP/IMAP、或是網頁傳送標準HTTP、檔案傳輸協定FTP、現代網路不可或缺的網域/位址轉換伺服器DNS，還是近年興起的BitTorrent P2P（peer to peer）傳輸協定，均屬於這層的管轄範圍。 \n 這層直接對應用程式開放，提供不同程式同一類型的服務，譬如你可以使用你所喜歡的程式開啟網頁，也可以使用Outlook或Thunderbird收發郵件。各種不同的應用層協定，會為該協定提供的服務提供必要的處理機制。同時也因為服務眾多，在這層的協定數量為4層之冠，光是想看個網頁，就可能有3種協定參與其中，包含取得私有IP的DHCP、網域與位址轉換的DNS、以及取得網頁資料的HTTP。 \n 傳輸層（Transport Layer） \n 資料經過了應用層之後，下一層便是傳輸層，此層對應用層傳送過來的資料進行處理，建立2台電腦之間可靠的傳輸。在此層常見的2種協定為TCP與UDP，絕大多數應用層協定都會選擇TCP，因為TCP提供一連串偵錯、重送、資料順序、流量控管等實作，確保2台電腦之間的連線正常，不會產生投桃報李的狀況。 \n 相較於TCP提供連線的可靠性，UDP則專注於資料的傳遞，從TCP（傳輸控制協定、Transmission Control Protocol）與UDP（使用者資料電報協定：User\xa0Datagram Protocol）的名稱可看出端倪，UDP幾乎不管資料是否正確送達，需要應用層自行處理。 \n 但別認為UDP就是項垃圾，像是DNS查詢、DHCP請求與配發都是使用UDP協定，另外像是部分影音串流服務，講求大量且迅速的資料傳遞，偶爾丟掉資料不會造成太大影響（因為最終觀賞或聆聽的終端是人，不易察覺畫面或聲音細微的缺陷）；即時通訊也是UDP的愛好者，因為人與人的溝通具時間性，上一句話漏掉的資訊，下一句話再傳來並沒有意義。除了上列2種常見的協定之外，前往中國旅遊出差，好用的翻牆方式PPTP，也住在這層喔。 \n 網路層（Transport Layer） \n 前文中舉了許多郵寄的例子，此層就相當是郵件或包裹上方的地址欄位，無論你想要寄去世界上任何一角落，只要將地址寫好，郵件或包裹便會到達目的地。 \n 網路層能夠提供實體介面網路卡1個邏輯上的位置，也就是我們常聽到的IP位址，此IP位址是唯一的（或至少在同層級的網路中是如此），所以資訊才能夠傳輸到正確的目的地。此層會將資料的目的地和來源地寫入，如同我們在信件上填入收件人和寄件者。 \n 除了賦予每個網路介面卡邏輯IP位址外，IP還定義了資料封包該如何繞送的規則，如同郵局有各地區的小據點，也有大型的轉運站，藉由這些規則，選擇較佳的傳送路徑，將東西正確傳遞。 \n 網路層的IP協定，事實上並非完全可靠，有可能在途中因為某些原因（封包緩衝區溢位、TTL為0……），整個資料完全不見。IP協定基本上是以「盡可能去做」為宗旨，有多少運算資源做多少事，超過負荷的資料並不提供其它方式修補，丟掉就是掉了。所以才需要傳輸層做這類確保工作。 \n 鏈結層（Link Level） \n 位於整個網路架構的最底層，負責制定資料傳輸的「實體」規格。所謂「實體」，就是我們眼睛看的到，手可以摸到的部分。以乙太網路來說，凡是接頭規格、傳輸線材種類、不同電壓代表何種資訊，都是鏈結層負責的內容。 \n 除了目前常見，採用RJ-45以及4對雙絞線的乙太網路之外，古老的乙太網路使用類似於電視同軸纜線的線材相互連結。以及目前大家比較常聽到的光纖、VDSL，也包含在其中。 \n 鏈結層的運作也包含不同實體網路的轉接，像是從家中電腦的乙太網路轉換為對外的光纖環境，負責的光電轉換機就會先把乙太網路的標頭拿掉，加入為光纖制定的標頭，在光線上傳送。當光電轉換機從光纖上收到資料時，也會先把光纖標頭拿掉，加入乙太網路的標頭，再將資料送到電腦上。 \n \n', 'tags': '', 'url': '網路架構與設定簡介.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': '以SSH維護倉儲', 'text': '1.下載PuTTY: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html \n 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以\xa0 \n \n \n \n \n \n \n 1 \n \n \n \n ssh-keygen -t rsa -b 4096 -C  "使用者學號" \n \n \n \n \n \n \n \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n 修改啟動的 start.bat 加入下列設定: \n \xa0 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n \n \n \n \n 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0 \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0 \xa0 \n Host github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port 22 \n \xa0\xa0\xa0\xa0 Hostname github.com \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 # for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0 # for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0 # plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n \n \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n [core] \n \xa0\xa0\xa0\xa0 repositoryformatversion = 0 \n \xa0\xa0\xa0\xa0 filemode =  false \n \xa0\xa0\xa0\xa0 bare =  false \n \xa0\xa0\xa0\xa0 logallrefupdates =  true \n \xa0\xa0\xa0\xa0 symlinks =  false \n \xa0\xa0\xa0\xa0 ignorecase =  true \n [submodule] \n \xa0\xa0\xa0\xa0 active = . \n [remote  "origin" ] \n \xa0\xa0\xa0\xa0 #url = https://github.com/mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/*:refs/remotes/origin/* \n [branch  "master" ] \n \xa0\xa0\xa0\xa0 remote = origin \n \xa0\xa0\xa0\xa0 merge = refs/heads/master \n [submodule  "cmsimde" ] \n \xa0\xa0\xa0\xa0 url = https: //github.com/mdecourse/cmsimde.git \n \n \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push \n \n', 'tags': '', 'url': '以SSH維護倉儲.html'}, {'title': 'W12', 'text': 'Leo Editor 與 Pelican blog 使用說明影片 \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': 'Blogger API', 'text': "基本概念: \n 1. 這裡所指的 Blogger API 為: \xa0 https://developers.google.com/blogger/docs/3.0/using \n 2. 將 CMSiMDE 中的 Pelican Blog 內容同步到 Google Blogger 的目的, 在讓網際內容管理系統中的網誌原始資料修改過程具備版次, 而且可同時將網誌出版在 Github Pages 與 Google Blogger 中, 讓網際內容的保存較具有永續性. \n 3. Google Blogger 中的網誌系統各有獨立 ID, 這裡稱為 blog_id, 而網誌中的每一篇文章各有獨立 ID, 這裡稱為 post_id. \n 4. Google Blogger 管理者登入後, 在 Settings - Permissions 項下, 允許 invite more authors, 而且在 Settings - Permissions - Blog admins and Authors 項下, 允許將所邀請共同寫作的 Author 提升為 Admin 管理者. \n 5. Google 的每一個 API 都允許使用者建立以 Oauth2 為基礎的登入使用授權憑證, 配合所啟動的各種 API 程式庫, 一旦啟用並登入後, 可以透過程式方法, 呼叫程式庫功能, 對各種 Google 所提供的服務 (Blogger, Drive, Gmail, Calendar 等) 新增內容. 以 Blogger 而言, 只要使用者被設為某一網誌的共同作者, 即擁有在該網誌新增或編輯自己所發布的網誌文章權限. \n 6. 使用者登入 Google 帳號後, 在 \xa0 https://console.developers.google.com \xa0 中所建立的 Oauth2 client ID, 可以下載存為 client_secrets.json 檔案. \n 7. client_secrets.json 檔案則可以透過下列程式, 轉換為 credential_token.dat, 使用者針對特定啟用的 API 程式庫, 可以在讀取 credential_token.dat 的情況下, 取得與登入 Gmail 帳號相同的使用授權, 直接在擁有權限的 blog_id 中新增特定的文章 (並以特定的 post_id 辨識). \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n \n \n \n @language   python \n # https://developers.google.com/blogger/docs/3.0/using \n # under Mac command + b to execute \n import   pickle \n import   os \n from   googleapiclient.discovery  import   build \n from   google_auth_oauthlib.flow  import   InstalledAppFlow \n \xa0 \n \xa0 \n SCOPES  =   [ 'https://www.googleapis.com/auth/blogger' , ] \n \xa0 \n # we check if the file tBo store the credentials exists \n if   not   os.path.exists( './../../yen_gm_blogger_token.dat' ): \n \xa0 \n \xa0\xa0\xa0\xa0 flow  =   InstalledAppFlow.from_client_secrets_file( './../../yen_gm_blogger_secrets.json' , SCOPES) \n \xa0\xa0\xa0\xa0 credentials  =   flow.run_local_server() \n \xa0 \n \xa0\xa0\xa0\xa0 with  open ( './../../yen_gm_blogger_token.dat' ,  'wb' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 pickle.dump(credentials, credentials_dat) \n else : \n \xa0\xa0\xa0\xa0 with  open ( './../../yen_gm_blogger_token.dat' ,  'rb' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 credentials  =   pickle.load(credentials_dat) \n service  =   build( 'blogger' ,  'v3' , credentials = credentials) \n g.es(service) \n \n \n \n \n \n \n \n", 'tags': '', 'url': 'Blogger API.html'}, {'title': 'W14', 'text': '', 'tags': '', 'url': 'W14.html'}, {'title': 'MacBook 操作指南', 'text': '參考資料: \n Mac OS X for Absolute Beginners.pdf \xa0 (for @gm users only) \n Learn C on the Mac.pdf \xa0 (for @gm users only) \n 這裡以 MacBook Air 2012 年出廠, 硬體規格: \n macOS Catalina Version 10.15.4 \n 1.8 GHz Dual-Core Intel Core i5 \n Memory $GB 1600 MHz DDR3 \n Graphics Intel HD Graphics 4000 1536 MB \n 的操作為例, 如何存活在機械設計工程系與精密機械工程科的網際內容管理課程. \n 由於網際內容管理課程主要以 Ｗindows 10 64 位元操作系統中的 Python 3 可攜程式環境使用為主. \n 從官方網站下載安裝 Python3 \n 因此 Catalina 系統中的首要任務, 便是安裝 Python 3: \n 在 2020.05.15 從 \xa0 https://www.python.org/downloads/mac-osx/ \xa0 可以下載安裝最新的 Python 3.8.3 解譯環境. \n 安裝 pip3 \n 有了 python 3 環境之後, 就可以從 Lanuchpad -> Other -> Terminal 開啟終端機, 並從 get-pip.py 下載用來安裝 pip3 的程式碼, 以終端機上的指令進行安裝: \n \n \n \n \n \n \n 1 \n \n \n \n sudo python3 get-pip.py \n \n \n \n \n \n \n \n 安裝 pip3 之後, 可以安裝 CMSiMDE 所需的 flask, flask_cors, lxml, bs4, markdown, pelican 以及 leo: \n \n \n \n \n \n \n 1 \n \n \n \n sudo pip3 install flask flask_cors lxml bs4 markdown pelican leo \n \n \n \n \n \n \n \n 安裝 XQuartz \n 之後, 就可以安裝 \xa0 XQuartz , 以便使用 xterm 替代 terminal. \n 接下來假如要使用 SciTE 作為文字編輯器, 建議透過 \xa0 https://www.macports.org/install.php \xa0 先根據 Catalina 操作系統版本安裝 Macports 之後, 再利用: \n \n \n \n \n \n \n 1 \n \n \n \n sudo port install scite \n \n \n \n \n \n \n \n 安裝 SciTE 文字編輯器. \n 至此, 再加上 Catalina 原有的 git 指令, 使用者已經可以在 MacBook 上執行與 Windows 10 64 位元操作系統上相同的: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n \n \n \n git clone --recurse-submodules \n \xa0 \n git add . \n \xa0 \n git commit -m  "commit message" \n \xa0 \n git push \n \xa0 \n git pull \n \xa0 \n git submodule add \n \xa0 \n git remote add \n \xa0 \n git branch \n \xa0 \n git merge \n \n \n \n \n \n \n \n 等指令, 只是在執行 python 程式時, 必須使用: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n python3 wsgi.py \n \xa0 \n pip3 install certain_module \n \n \n \n \n \n \n \n 否則直接使用 python 執行, 將會用 Python 2.7 環境執行而產生錯誤. \n 其他建議安裝套件 \n Microsoft遠程桌面 \n 火狐瀏覽器 \n OBS \n Visual Studio程式碼 \n Visual Studio Code Distilled.pdf \xa0 （僅適用於@gm用戶） \n 顫振（飛鏢） \n 其他提示 \n Command + Shift +。 （切換隱藏的文件夾和文件） \n', 'tags': '', 'url': 'MacBook 操作指南.html'}, {'title': '15至18週', 'text': '未來規劃 \n 目前希望先穩定升學二技完先去工作，再考慮是否讀研究所 \n', 'tags': '', 'url': '15至18週.html'}, {'title': '資料來源', 'text': 'Web si (網站te):\xa0 https://mde.tw/wcmj2020 \xa0 \n 指導老師:嚴家銘 \n', 'tags': '', 'url': '資料來源.html'}]};