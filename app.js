const vaccineData = {
  birth: { label:'عند الولادة', vaccines:[
    {name:'BCG (السل)',desc:'لقاح السل — جرعة وحيدة بالذراع الأيسر',icon:'🛡️',type:'required'},
    {name:'التهاب الكبد B (الجرعة الأولى)',desc:'الجرعة الأولى خلال 24 ساعة من الولادة',icon:'💊',type:'required'},
  ]},
  '2m': { label:'شهرين (2 أشهر)', vaccines:[
    {name:'الخماسي (DTP-HepB-Hib) — الجرعة 1',desc:'الدفتيريا، الكزاز، الشاهوق، الكبد B، المستدمية النزلية',icon:'💉',type:'required'},
    {name:'شلل الأطفال الفموي (OPV) — الجرعة 1',desc:'لقاح شلل الأطفال عن طريق الفم',icon:'💧',type:'required'},
    {name:'المكورات الرئوية (PCV) — الجرعة 1',desc:'يقي من التهاب السحايا والالتهاب الرئوي',icon:'🫁',type:'required'},
    {name:'الروتا فيروس — الجرعة 1',desc:'يحمي من الإسهال الشديد',icon:'🌀',type:'optional'},
  ]},
  '3m': { label:'3 أشهر', vaccines:[
    {name:'الخماسي (DTP-HepB-Hib) — الجرعة 2',desc:'الجرعة الثانية من اللقاح الخماسي',icon:'💉',type:'required'},
    {name:'شلل الأطفال الفموي (OPV) — الجرعة 2',desc:'الجرعة الثانية',icon:'💧',type:'required'},
    {name:'المكورات الرئوية (PCV) — الجرعة 2',desc:'الجرعة الثانية',icon:'🫁',type:'required'},
    {name:'الروتا فيروس — الجرعة 2',desc:'الجرعة الثانية',icon:'🌀',type:'optional'},
  ]},
  '4m': { label:'4 أشهر', vaccines:[
    {name:'الخماسي (DTP-HepB-Hib) — الجرعة 3',desc:'الجرعة الثالثة من الأساسية',icon:'💉',type:'required'},
    {name:'شلل الأطفال الفموي (OPV) — الجرعة 3',desc:'الجرعة الثالثة',icon:'💧',type:'required'},
    {name:'المكورات الرئوية (PCV) — الجرعة 3',desc:'الجرعة الثالثة',icon:'🫁',type:'required'},
    {name:'الروتا فيروس — الجرعة 3',desc:'الجرعة الثالثة والأخيرة (حسب النوع)',icon:'🌀',type:'optional'},
  ]},
  '6m': { label:'6 أشهر', vaccines:[
    {name:'الخماسي (DTP-HepB-Hib) — الجرعة المعززة/الثالثة',desc:'إتمام السلسلة الأساسية',icon:'💉',type:'required'},
    {name:'شلل الأطفال الفموي (OPV) — الجرعة الثالثة/المعززة المبكرة',desc:'جرعة إضافية حسب الجدول',icon:'💧',type:'required'},
    {name:'التهاب الكبد B (الجرعة الثالثة)',desc:'إكمال سلسلة الكبد B',icon:'💊',type:'required'},
    {name:'الإنفلونزا (الموسمي)',desc:'يُعطى سنوياً بدءاً من عمر 6 أشهر',icon:'🌡️',type:'optional'},
  ]},
  '9m': { label:'9 أشهر', vaccines:[
    {name:'الحصبة (MMR) — الجرعة الأولى',desc:'لقاح الحصبة والنكاف والحصبة الألمانية',icon:'🔴',type:'required'},
    {name:'الحمى الصفراء',desc:'مطلوب للسفر لمناطق موبوءة (اختياري)',icon:'🟡',type:'optional'},
  ]},
  '12m': { label:'سنة (12 شهراً)', vaccines:[
    {name:'المكورات الرئوية (PCV) — الجرعة المعززة',desc:'الجرعة المنشطة',icon:'🫁',type:'required'},
    {name:'جدري الماء (Varicella) — الجرعة 1',desc:'يقي من الحماق',icon:'⭐',type:'important'},
    {name:'التهاب الكبد A — الجرعة 1',desc:'الجرعة الأولى',icon:'🧡',type:'optional'},
  ]},
  '15m': { label:'15 شهراً', vaccines:[
    {name:'MMR — الجرعة الثانية',desc:'الجرعة الثانية من الحصبة الثلاثي',icon:'🔴',type:'required'},
    {name:'جدري الماء (Varicella) — الجرعة 2',desc:'الجرعة الثانية لضمان المناعة',icon:'⭐',type:'important'},
  ]},
  '18m': { label:'18 شهراً', vaccines:[
    {name:'DTP — الجرعة المعززة',desc:'جرعة معززة للدفتيريا والكزاز والشاهوق',icon:'💉',type:'required'},
    {name:'شلل الأطفال (OPV) — الجرعة المعززة',desc:'جرعة معززة مهمة',icon:'💧',type:'required'},
    {name:'التهاب الكبد A — الجرعة 2',desc:'الجرعة الثانية والأخيرة',icon:'🧡',type:'optional'},
  ]},
  '2y': { label:'سنتان (24 شهر)', vaccines:[
    {name:'المكورات السحائية (MenACWY)',desc:'يحمي من التهاب السحايا البكتيري (جرعة واحدة)',icon:'🧠',type:'important'},
    {name:'التيفوئيد',desc:'موصى به في حال السفر أو المناطق الموبوئة',icon:'🌡️',type:'optional'},
    {name:'الإنفلونزا السنوي',desc:'جرعة سنوية مستمرة',icon:'🌡️',type:'optional'},
  ]},
};

const ageKeysOrder = ['birth', '2m', '3m', '4m', '6m', '9m', '12m', '15m', '18m', '2y'];
const ageButtonNames = {
  birth: 'عند الولادة', '2m': 'شهرين', '3m': '3 أشهر', '4m': '4 أشهر',
  '6m': '6 أشهر', '9m': '9 أشهر', '12m': 'سنة', '15m': '15 شهر', '18m': '18 شهر', '2y': 'سنتين'
};

function buildAgeTabs() {
  const container = document.getElementById('ageTabsContainer');
  if(!container) return;
  container.innerHTML = '';
  ageKeysOrder.forEach(key => {
    const btn = document.createElement('div');
    btn.className = 'age-tab';
    btn.textContent = ageButtonNames[key] || key;
    btn.setAttribute('data-key', key);
    btn.onclick = (function(k) { return function() { selectAge(k, this); }; })(key);
    container.appendChild(btn);
  });
}

let selectedKey = null;

function selectAge(key, el) {
  selectedKey = key;
  document.querySelectorAll('.age-tab').forEach(tab => tab.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('years').value = '';
  document.getElementById('months').value = '';
  checkVaccines();
}

function clearTabs() {
  selectedKey = null;
  document.querySelectorAll('.age-tab').forEach(tab => tab.classList.remove('active'));
}

function getKeyFromAge(y, m) {
  const totalMonths = (y * 12) + m;
  if (totalMonths === 0) return 'birth';
  if (totalMonths <= 2) return '2m';
  if (totalMonths <= 3) return '3m';
  if (totalMonths <= 4) return '4m';
  if (totalMonths <= 6) return '6m';
  if (totalMonths <= 9) return '9m';
  if (totalMonths <= 12) return '12m';
  if (totalMonths <= 15) return '15m';
  if (totalMonths <= 18) return '18m';
  if (totalMonths <= 24) return '2y';
  return '2y';
}

function checkVaccines() {
  let key = selectedKey;
  if (!key) {
    const yearsVal = document.getElementById('years').value;
    const monthsVal = document.getElementById('months').value;
    if ((!yearsVal || yearsVal === '') && (!monthsVal || monthsVal === '')) {
      alert('👶 يرجى إدخال عمر الطفل أو اختياره من الأزرار أعلاه');
      return;
    }
    const y = parseInt(yearsVal) || 0;
    const m = parseInt(monthsVal) || 0;
    if (y < 0 || m < 0 || m > 11) {
      alert('الرجاء إدخال سنوات صحيحة (0-18) وأشهر (0-11)');
      return;
    }
    key = getKeyFromAge(y, m);
  }

  const resultsDiv = document.getElementById('results');
  if (!key || !vaccineData[key]) {
    resultsDiv.innerHTML = `<div class="no-vaccines"><div style="font-size:2.8rem;margin-bottom:0.5rem">📌</div><div style="font-weight:800;color:var(--navy);margin-bottom:0.3rem">لا توجد لقاحات مجدولة لهذا العمر</div><div>تأكدي من اكتمال اللقاحات السابقة قبل الانتقال لمراحل أخرى</div></div>`;
    resultsDiv.classList.add('show');
    return;
  }

  const ageInfo = vaccineData[key];
  let html = `
    <div class="result-header">
      <div>
        <div class="age-display">${ageInfo.label}</div>
        <div class="age-label">عمر الطفل</div>
      </div>
      <div class="count-badge">💉 ${ageInfo.vaccines.length} لقاح</div>
    </div>
  `;

  const required = ageInfo.vaccines.filter(v => v.type === 'required');
  const important = ageInfo.vaccines.filter(v => v.type === 'important');
  const optional = ageInfo.vaccines.filter(v => v.type === 'optional');

  if (required.length > 0) {
    html += '<div class="section-title">✅ اللقاحات المطلوبة</div>';
    required.forEach(vaccine => {
      html += `
        <div class="vaccine-card">
          <div class="vaccine-icon">${vaccine.icon}</div>
          <div class="vaccine-info">
            <div class="vaccine-name">${vaccine.name}</div>
            <div class="vaccine-desc">${vaccine.desc}</div>
            <span class="vaccine-tag tag-required">مطلوب</span>
          </div>
        </div>
      `;
    });
  }

  if (important.length > 0) {
    html += '<div class="section-title">⚠️ لقاحات مهمة</div>';
    important.forEach(vaccine => {
      html += `
        <div class="vaccine-card important">
          <div class="vaccine-icon">${vaccine.icon}</div>
          <div class="vaccine-info">
            <div class="vaccine-name">${vaccine.name}</div>
            <div class="vaccine-desc">${vaccine.desc}</div>
            <span class="vaccine-tag tag-important">مهم</span>
          </div>
        </div>
      `;
    });
  }

  if (optional.length > 0) {
    html += '<div class="section-title">💡 لقاحات اختيارية</div>';
    optional.forEach(vaccine => {
      html += `
        <div class="vaccine-card optional">
          <div class="vaccine-icon">${vaccine.icon}</div>
          <div class="vaccine-info">
            <div class="vaccine-name">${vaccine.name}</div>
            <div class="vaccine-desc">${vaccine.desc}</div>
            <span class="vaccine-tag tag-optional">اختياري</span>
          </div>
        </div>
      `;
    });
  }

  html += `<div class="note-box">📝 <strong>ملاحظة:</strong> هذا التطبيق يقدم معلومات إرشادية فقط. يرجى استشارة طبيب الأطفال المختص قبل إعطاء أي لقاح.</div>`;

  resultsDiv.innerHTML = html;
  resultsDiv.classList.add('show');
}

document.addEventListener('DOMContentLoaded', buildAgeTabs);