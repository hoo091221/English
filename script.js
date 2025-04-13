
var deleteDuplication = false;
var numberCounter = 0;

function checkboxResponse() {
    if (document.getElementById('checkbox').checked == true) {
        deleteDuplication = true;
        let e = document.getElementById('list').innerHTML = '중복 제거하기가 켜진 경우 지금까지 나온 단어들을 적어드립니다.';
        numberCounter = 0;
        document.getElementById('numbering').style.opacity = "1";

    } else {

        document.getElementById('numbering').style.opacity = "0";

        deleteDuplication = false;
        words = ["introduce", "unique", "handmade basket", "organize", "exhibition plan", "inform", "located", "requirement", "further ", "assistance", "damp", "thick", "make out", "shadow", "shaking", "figure", "faint", "beam", "crack", "escape", "stare at", "hop", "at ease", "gestural", "involve", "nod", "complement", "layer", "indicate", "atmosphere", "collaboration", "engage in", "over­gesturing", "distract from", "overshadow", "assume", "gene editing", "preferable", "transform", "temptation", "superior", "unborn", "benefical", "pursuit", "grade school", "certainty", "carry", "organism", "practice", "realize", "succession", "logical", "ovservation", "process", "uncertainty", "depending upon", "remain", "a wealth of", "evidence", "supervisor", "percieve", "motivate", "relatedness", "internalization", "fuel", "competence", "enhance", "a sense of connectedness", "take on", "modern", "technique", "fMRI", "reveal", "light up", "intense", "associated with", "pronuncation", "response", "strengthen", "connective structure", "overall", "concentration", "public speaking skills", "in particular", "encourage", "consume", "frequency", "account for", "percentage", "combine", "share", "rarely", "major", "interest", "earn", "doctoral degree", "economics", "professor", "influential", "award", "Economic Sciences", "explore", "amazing", "walking path", "operation", "admission", "seasonal", "indoors", "depart", "stuffed toy", "decorative", "flowerpot", "prepare", "participation fee", "material", "include", "detail", "routine", "enable", "athlete", "evaluate", "competition", "condition", "bounce", "supply", "properly", "prepare for", "adjust", "fine-tune", "in pursuit of", "adaptation", "internal", "influence", "affect", "performance", "achieve", "promotion", "deal with", "consumer", "psychology", "one way or another", "marketer", "provide", "fashion", "possibility", "sales", "fool", "purchase", "long-term", "damage", "relate", "experience", "identify", "appreciate", "reach", "argue", "strike", "partial", "reflection", "capture", "idea", "particular", "each and every", "somehow", "emotional", "be aware", "conversation", "roll", "have a clue", "on the tip of one's tongue", "argument", "overtired", "recital", "explain", "justify", "circumstances", "a series of", "notice", "frown", "mention", "conduct", "electricity", "more or less", "efficiently", "drop", "electrically", "conscious mind", "viewpoint", "objective", "subjective", "track", "subconscious", "intensity", "figure out", "communicate", "express", "discontent", "frequency", "researcher", "experiment", "microphone", "record", "expert", "organism", "survival", "objective", "as opposed to", "essential", "establish", "positive", "audience", "tragedy", "misfortune", "draw out", "recognizable", "portrayal", "fictional", "documentary", "companion", "valued", "ally", "dozens of", "incidental", "assume", "capable", "despite", "lack", "imply", "concept", "concrete", "specific", "in principle", "possess", "nonconceptual", "currently", "joint", "bear", "weight", "squeeze", "respond", "off-and-on", "soak", "transfer", "look into", "shift", "pressure", "release", "narrow", "level", "volume", "self-constructed", "argue", "morality", "fairness", "air­conditioning", "accelerate", "box", "airflow", "breeze", "unit", "architect", "comfort", "invention", "encounter", "resistance", "logically", "reasoning", "viewpoint", "by definition", "application", "conception", "effective", "nonlinear", "manner", "state", "represent", "accuracy", "census taking", "income distrubution", "in effect", "test anxiety", "put aside", "way", "morally", "homelessness", "spread", "suffering", "disturb", "wipe off", "quantify", "by no means", "barely", "owe", "disbelief", "treasure", "tear down", "massive", "property", "include", "eliminate"];
        meanings = ["소개하다", "독특한", "수제 바구니", "조직하다", "전시 배치도", "알리다", "위치한", "요구 사항", "추가적인", "도움", "습기 찬", "짙은", "알아보다", "그림자", "떨리는", "형상", "희미한", "빛줄기", "틈새", "새어 나오다", "~을 바라보다", "깡충 뛰다", "편안한", "몸짓의", "포함하다", "고개를 끄덕이다", "보완하다", "겹", "나타내다", "분위기", "협력", "~에 참여하다", "과도한 몸짓", "~에 집중이 안되게 하다", "가리다", "가정하다", "유전자 편집", "바람직한", "변형하다", "유혹", "우수한", "태어나지 않은", "유익한", "추구", "초등학교", "확실함", "담고 있다", "유기체", "실제", "깨닫다", "연속", "논리적", "관찰", "과정", "불확실함", "~에 따라", "남아 있다", "수많은", "증거", "상사", "여기다; 인식하다", "동기부여하다", "관계성", "내면화", "자극하다; 연료를 공급하다", "유능함", "향상시키다", "유대감", "맞서다", "현대의", "기술", "기능적 자기 공명 영상", "드러내다", "밝히다", "강렬한", "~와 연관된", "발음", "반응", "강화시키다", "결합 구조", "전반적인", "집중력", "대중 말하기 능력", "특히", "장려하다", "먹다", "빈도", "~을 차지하다", "비율", "합치다", "몫", "거의 ~않다", "전공하다", "흥미", "받다", "박사 학위", "경제학", "교수", "영향력 있는", "수여하다", "경제학", "탐험하다", "놀라운", "보행로", "운영", "입장", "계절에 따른", "실내에", "출발하다", "봉제 인형", "장식의", "화분", "준비하다", "참가비", "재료", "포함하다", "세부사항", "루틴", "가능하게 하다", "운동선수", "평가하다", "경기, 경쟁", "조건", "(공을) 튀기다", "제공하다", "적절히", "~을 준비하다", "조절하다", "미세하게 조정하다", "~을 추구하여", "적응", "내적", "영향", "영향을 미치다", "수행", "해내다", "프로모션, 홍보", "~을 다루다", "소비자", "심리", "어떤 한 방식으로", "마케팅 담당자", "제공하다", "방식, 방법", "가능성", "매출, 판매", "속이다", "구매하다", "장기적인", "손해, 피해", "전하다", "경험", "확인하다", "진가를 인정하다", "도달하다", "주장하다", "인상을 주다", "부분적인", "반영", "포착하다", "관념", "특정한", "각각의 모든", "어떻게든", "감정적인", "~을 인식하다", "대화", "굴러가다", "짐작하다", "당장 떠오르지 않는", "말다툼", "극도로 지친", "연주회", "설명하다", "정당화하다", "상황, 환경", "연속된", "인지하다", "찡그리다", "언급하다", "전도하다; 전달하다", "전기", "꽤, 다소", "효율적으로", "방울", "전기적으로", "의식", "관점", "객관적인", "주관적인", "추적하다", "잠재의식의", "강도", "계산하다", "의사소통을 하다", "표현하다", "불만", "주파수", "연구자", "실험하다", "마이크", "녹음하다", "전문가", "유기체", "살아남기 위한", "목표", "~와 대비되는", "필수적인", "수립하다", "긍정적인", "관객", "비극", "불행", "끌어내다", "알아볼 수 있는", "묘사", "허구의", "사실적인", "동료", "소중한", "협력자", "수십의", "부수적인", "가정하다", "능력이 있는", "불구하고", "부족하다", "의미하다", "개념", "구체적인", "특정한", "원칙적으로", "소유하다", "비개념적인", "현재", "관절", "지탱하다", "체중", "압착하다", "반응하다", "반복적인", "흡수하다", "옮기다, 이동하다", "~을 들여다보다", "옮기다", "압력", "풀다", "좁은", "높이", "부피", "스스로 구성해 낸", "주장하다", "도덕성", "공평함", "냉방 설비", "가속화하다", "구조물", "공기 흐름", "산들바람", "장치", "건축가", "안락", "발명품", "맞닥뜨리다", "저항", "논리적으로", "추론", "관점", "정의상", "적용", "구상", "효과적인", "비선형적", "방식, 방법", "말하다", "나타내다", "정확성", "인구 조사", "소득 분포", "사실상", "시험 불안", "제쳐 두다", "방식, 측면", "도덕적으로", "노숙자 문제", "확산", "고통", "동요시키다", "닦아 내다", "수량화하다", "결코 ~않다", "거의 ~않다", "덕분이다", "믿지 않음, 불신", "보물", "허물다", "거대한", "소유지", "포함하다", "제거하다"];
        
    }
}

let words = ["introduce", "unique", "handmade basket", "organize", "exhibition plan", "inform", "located", "requirement", "further ", "assistance", "damp", "thick", "make out", "shadow", "shaking", "figure", "faint", "beam", "crack", "escape", "stare at", "hop", "at ease", "gestural", "involve", "nod", "complement", "layer", "indicate", "atmosphere", "collaboration", "engage in", "over­gesturing", "distract from", "overshadow", "assume", "gene editing", "preferable", "transform", "temptation", "superior", "unborn", "benefical", "pursuit", "grade school", "certainty", "carry", "organism", "practice", "realize", "succession", "logical", "ovservation", "process", "uncertainty", "depending upon", "remain", "a wealth of", "evidence", "supervisor", "percieve", "motivate", "relatedness", "internalization", "fuel", "competence", "enhance", "a sense of connectedness", "take on", "modern", "technique", "fMRI", "reveal", "light up", "intense", "associated with", "pronuncation", "response", "strengthen", "connective structure", "overall", "concentration", "public speaking skills", "in particular", "encourage", "consume", "frequency", "account for", "percentage", "combine", "share", "rarely", "major", "interest", "earn", "doctoral degree", "economics", "professor", "influential", "award", "Economic Sciences", "explore", "amazing", "walking path", "operation", "admission", "seasonal", "indoors", "depart", "stuffed toy", "decorative", "flowerpot", "prepare", "participation fee", "material", "include", "detail", "routine", "enable", "athlete", "evaluate", "competition", "condition", "bounce", "supply", "properly", "prepare for", "adjust", "fine-tune", "in pursuit of", "adaptation", "internal", "influence", "affect", "performance", "achieve", "promotion", "deal with", "consumer", "psychology", "one way or another", "marketer", "provide", "fashion", "possibility", "sales", "fool", "purchase", "long-term", "damage", "relate", "experience", "identify", "appreciate", "reach", "argue", "strike", "partial", "reflection", "capture", "idea", "particular", "each and every", "somehow", "emotional", "be aware", "conversation", "roll", "have a clue", "on the tip of one's tongue", "argument", "overtired", "recital", "explain", "justify", "circumstances", "a series of", "notice", "frown", "mention", "conduct", "electricity", "more or less", "efficiently", "drop", "electrically", "conscious mind", "viewpoint", "objective", "subjective", "track", "subconscious", "intensity", "figure out", "communicate", "express", "discontent", "frequency", "researcher", "experiment", "microphone", "record", "expert", "organism", "survival", "objective", "as opposed to", "essential", "establish", "positive", "audience", "tragedy", "misfortune", "draw out", "recognizable", "portrayal", "fictional", "documentary", "companion", "valued", "ally", "dozens of", "incidental", "assume", "capable", "despite", "lack", "imply", "concept", "concrete", "specific", "in principle", "possess", "nonconceptual", "currently", "joint", "bear", "weight", "squeeze", "respond", "off-and-on", "soak", "transfer", "look into", "shift", "pressure", "release", "narrow", "level", "volume", "self-constructed", "argue", "morality", "fairness", "air­conditioning", "accelerate", "box", "airflow", "breeze", "unit", "architect", "comfort", "invention", "encounter", "resistance", "logically", "reasoning", "viewpoint", "by definition", "application", "conception", "effective", "nonlinear", "manner", "state", "represent", "accuracy", "census taking", "income distrubution", "in effect", "test anxiety", "put aside", "way", "morally", "homelessness", "spread", "suffering", "disturb", "wipe off", "quantify", "by no means", "barely", "owe", "disbelief", "treasure", "tear down", "massive", "property", "include", "eliminate"];
let meanings = ["소개하다", "독특한", "수제 바구니", "조직하다", "전시 배치도", "알리다", "위치한", "요구 사항", "추가적인", "도움", "습기 찬", "짙은", "알아보다", "그림자", "떨리는", "형상", "희미한", "빛줄기", "틈새", "새어 나오다", "~을 바라보다", "깡충 뛰다", "편안한", "몸짓의", "포함하다", "고개를 끄덕이다", "보완하다", "겹", "나타내다", "분위기", "협력", "~에 참여하다", "과도한 몸짓", "~에 집중이 안되게 하다", "가리다", "가정하다", "유전자 편집", "바람직한", "변형하다", "유혹", "우수한", "태어나지 않은", "유익한", "추구", "초등학교", "확실함", "담고 있다", "유기체", "실제", "깨닫다", "연속", "논리적", "관찰", "과정", "불확실함", "~에 따라", "남아 있다", "수많은", "증거", "상사", "여기다; 인식하다", "동기부여하다", "관계성", "내면화", "자극하다; 연료를 공급하다", "유능함", "향상시키다", "유대감", "맞서다", "현대의", "기술", "기능적 자기 공명 영상", "드러내다", "밝히다", "강렬한", "~와 연관된", "발음", "반응", "강화시키다", "결합 구조", "전반적인", "집중력", "대중 말하기 능력", "특히", "장려하다", "먹다", "빈도", "~을 차지하다", "비율", "합치다", "몫", "거의 ~않다", "전공하다", "흥미", "받다", "박사 학위", "경제학", "교수", "영향력 있는", "수여하다", "경제학", "탐험하다", "놀라운", "보행로", "운영", "입장", "계절에 따른", "실내에", "출발하다", "봉제 인형", "장식의", "화분", "준비하다", "참가비", "재료", "포함하다", "세부사항", "루틴", "가능하게 하다", "운동선수", "평가하다", "경기, 경쟁", "조건", "(공을) 튀기다", "제공하다", "적절히", "~을 준비하다", "조절하다", "미세하게 조정하다", "~을 추구하여", "적응", "내적", "영향", "영향을 미치다", "수행", "해내다", "프로모션, 홍보", "~을 다루다", "소비자", "심리", "어떤 한 방식으로", "마케팅 담당자", "제공하다", "방식, 방법", "가능성", "매출, 판매", "속이다", "구매하다", "장기적인", "손해, 피해", "전하다", "경험", "확인하다", "진가를 인정하다", "도달하다", "주장하다", "인상을 주다", "부분적인", "반영", "포착하다", "관념", "특정한", "각각의 모든", "어떻게든", "감정적인", "~을 인식하다", "대화", "굴러가다", "짐작하다", "당장 떠오르지 않는", "말다툼", "극도로 지친", "연주회", "설명하다", "정당화하다", "상황, 환경", "연속된", "인지하다", "찡그리다", "언급하다", "전도하다; 전달하다", "전기", "꽤, 다소", "효율적으로", "방울", "전기적으로", "의식", "관점", "객관적인", "주관적인", "추적하다", "잠재의식의", "강도", "계산하다", "의사소통을 하다", "표현하다", "불만", "주파수", "연구자", "실험하다", "마이크", "녹음하다", "전문가", "유기체", "살아남기 위한", "목표", "~와 대비되는", "필수적인", "수립하다", "긍정적인", "관객", "비극", "불행", "끌어내다", "알아볼 수 있는", "묘사", "허구의", "사실적인", "동료", "소중한", "협력자", "수십의", "부수적인", "가정하다", "능력이 있는", "불구하고", "부족하다", "의미하다", "개념", "구체적인", "특정한", "원칙적으로", "소유하다", "비개념적인", "현재", "관절", "지탱하다", "체중", "압착하다", "반응하다", "반복적인", "흡수하다", "옮기다, 이동하다", "~을 들여다보다", "옮기다", "압력", "풀다", "좁은", "높이", "부피", "스스로 구성해 낸", "주장하다", "도덕성", "공평함", "냉방 설비", "가속화하다", "구조물", "공기 흐름", "산들바람", "장치", "건축가", "안락", "발명품", "맞닥뜨리다", "저항", "논리적으로", "추론", "관점", "정의상", "적용", "구상", "효과적인", "비선형적", "방식, 방법", "말하다", "나타내다", "정확성", "인구 조사", "소득 분포", "사실상", "시험 불안", "제쳐 두다", "방식, 측면", "도덕적으로", "노숙자 문제", "확산", "고통", "동요시키다", "닦아 내다", "수량화하다", "결코 ~않다", "거의 ~않다", "덕분이다", "믿지 않음, 불신", "보물", "허물다", "거대한", "소유지", "포함하다", "제거하다"];
var nextMeaning;

function mixWords() {
    if (words.length > 0) {
    document.getElementById('wordMeanings').style.opacity = "0";

    let r = Math.floor(Math.random() * words.length);

    document.getElementById('randomWords').innerHTML = words[r];
    document.getElementById('wordMeanings').innerHTML = meanings[r];

    if (deleteDuplication == true) {

        numberCounter++;
        document.getElementById('numbering').innerHTML = `현재까지 나온 단어 수: ${numberCounter}개`;
        
        if (!nextMeaning) nextMeaning = '';

        let e = document.getElementById('list');
        e.innerHTML = e.innerHTML + `${nextMeaning}<br>${words[r]} - `;

        nextMeaning = meanings[r];

        words.splice(r, 1);
        meanings.splice(r, 1);
    }
} else {
    document.getElementById('randomWords').innerHTML = '모든 단어를 학습했어요.';
    document.getElementById('wordMeanings').innerHTML = '새로고침으로 복습할 수 있어요.';
}

}

function wordMeanings() {
    document.getElementById('wordMeanings').style.opacity = "1";
}