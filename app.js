/* ===================== データ定義 ===================== */

const DEFAULT_CATEGORIES = [
  // S ランク (合計49)
  { key: "teacher_mood",     rank: "S", label: "先生の雰囲気",                     weight: 12 },
  { key: "staff_ratio",      rank: "S", label: "保育士の配置基準・職員体制",       weight: 11 },
  { key: "distance",         rank: "S", label: "自宅からの距離",                   weight: 9 },
  { key: "childcare_content",rank: "S", label: "保育方針・カリキュラム",           weight: 9 },
  { key: "risk_management",  rank: "S", label: "安全対策・危機管理体制",           weight: 8 },

  // A ランク (合計31)
  { key: "cost",             rank: "A", label: "費用",                             weight: 7 },
  { key: "nurse_present",    rank: "A", label: "看護師常駐有無",                   weight: 4, type: "boolean" },
  { key: "security",         rank: "A", label: "防犯対策",                         weight: 5 },
  { key: "children_mood",    rank: "A", label: "園児の雰囲気",                     weight: 5 },
  { key: "settling_flex",    rank: "A", label: "慣らし保育の柔軟性",               weight: 4 },
  { key: "hours",            rank: "A", label: "開所時間帯(通常保育)",           weight: 3 },
  { key: "turnover",         rank: "A", label: "保育士の離職率・勤続年数",         weight: 2 },
  { key: "infection_policy", rank: "A", label: "体調不良時の対応基準",             weight: 1 },

  // B/C ランク (合計20)
  { key: "facility_clean",   rank: "BC", label: "施設のきれいさ",                   weight: 2 },
  { key: "in_house_cooking", rank: "BC", label: "園内調理",                         weight: 2, type: "boolean", boolLabels: ["外部搬入", "自園調理"] },
  { key: "playground",       rank: "BC", label: "園庭有無",                         weight: 2 },
  { key: "diaper_change",    rank: "BC", label: "おむつ替えの頻度",                 weight: 2 },
  { key: "toilet_clean",     rank: "BC", label: "トイレの清潔さ",                   weight: 1 },
  { key: "extended_fee",     rank: "BC", label: "延長保育料金",                     weight: 1 },
  { key: "outdoor_walks",    rank: "BC", label: "園外散歩",                         weight: 1 },
  { key: "events_freq",      rank: "BC", label: "行事・イベントの頻度",             weight: 1 },
  { key: "contact_app",      rank: "BC", label: "連絡帳アプリ有無",                 weight: 1, type: "boolean" },
  { key: "futon_sterilize",  rank: "BC", label: "ふとんの熱風消毒",                 weight: 1, type: "boolean" },
  { key: "stroller_parking", rank: "BC", label: "ベビーカー置き場の有無",           weight: 1, type: "boolean" },
  { key: "parking",          rank: "BC", label: "駐車場有無",                       weight: 1, type: "boolean" },
  { key: "education",        rank: "BC", label: "知育プログラムの充実度",           weight: 1 },
  { key: "subscription",     rank: "BC", label: "おむつ・タオル等サブスクサービス", weight: 1, type: "boolean" },
  { key: "sibling_discount", rank: "BC", label: "兄弟同時通園時の割引・優遇",       weight: 1 },
  { key: "english_program",  rank: "BC", label: "英語・専門プログラムなどの特色保育", weight: 1 },
];

const RANK_LABELS = { S: "Sランク", A: "Aランク", BC: "B/Cランク" };

/* ===================== 見学メモ 質問リスト ===================== */

const VISIT_QUESTIONS = [
  { category: "保育方針・保育内容", questions: [
    { key: "policy_features",   text: "保育方針やカリキュラムの特徴" },
    { key: "daily_schedule",    text: "1日のタイムスケジュール" },
    { key: "education_program", text: "知育プログラムや特色ある取り組み" },
    { key: "event_frequency",   text: "行事やイベントの頻度・平日休日の傾向" },
  ]},
  { category: "職員体制・先生", questions: [
    { key: "staff_ratio_1yo",       text: "1歳児クラスの保育士配置基準" },
    { key: "staff_ratio_generous",  text: "国基準より手厚い配置かどうか" },
    { key: "teacher_experience",    text: "担任の経験年数・勤続年数の傾向" },
    { key: "staff_turnover_detail", text: "保育士の離職率・異動頻度" },
  ]},
  { category: "安全・防犯・危機管理", questions: [
    { key: "evacuation_drill",    text: "避難訓練・防犯訓練の頻度" },
    { key: "security_measures",   text: "不審者対策(オートロック・防犯カメラ等)" },
    { key: "accident_response",   text: "ケガ・事故発生時の対応フローと連絡方法" },
    { key: "minor_injury_report", text: "小さなケガ(擦り傷など)があった場合、当日はどのように保護者に伝えていますか" },
    { key: "staff_info_sharing",  text: "職員間で子どもの安全に関する情報共有はどのように行っていますか(朝礼・申し送りノート等)" },
  ]},
  { category: "体調管理・保健", questions: [
    { key: "nurse_frequency",         text: "看護師常駐の有無・訪問頻度" },
    { key: "fever_callback",          text: "発熱等での呼び出し基準" },
    { key: "medication_support",      text: "与薬対応の可否" },
    { key: "infection_policy_detail", text: "感染症流行時の登園基準" },
  ]},
  { category: "慣らし保育・入園準備", questions: [
    { key: "settling_period_detail", text: "慣らし保育の標準期間" },
    { key: "work_return_flex",       text: "職場復帰時期への柔軟な対応可否" },
    { key: "prep_items",             text: "入園前の準備物" },
  ]},
  { category: "食事・おむつ", questions: [
    { key: "cooking_type_detail",   text: "自園調理か外部搬入か" },
    { key: "diaper_frequency_detail", text: "おむつ替えの頻度" },
  ]},
  { category: "開所時間・費用", questions: [
    { key: "opening_hours_detail",    text: "通常保育の開所時間" },
    { key: "extended_hours_fee",      text: "延長保育の時間帯・料金" },
    { key: "other_fees_detail",       text: "保育料以外の費用(衛生費・諸経費・サブスク等)" },
    { key: "sibling_discount_detail", text: "兄弟同時通園の割引有無" },
  ]},
  { category: "施設・設備", questions: [
    { key: "playground_detail_note",   text: "園庭の有無、ない場合の外遊び場所" },
    { key: "walk_frequency",           text: "近隣散歩の頻度" },
    { key: "futon_sterilize_detail",   text: "布団の熱風消毒の有無・頻度" },
    { key: "toilet_cleaning_frequency",text: "トイレの清掃頻度" },
    { key: "stroller_parking_detail",  text: "ベビーカー置き場の有無" },
    { key: "parking_detail",           text: "駐車場の有無" },
  ]},
  { category: "連絡・情報共有", questions: [
    { key: "contact_format",       text: "連絡帳の形式(アプリ/紙)" },
    { key: "daily_sharing_method", text: "日々の様子の共有方法(写真配信など)" },
  ]},
];

/* ===================== 状態管理 ===================== */

function defaultState() {
  const weights = {};
  DEFAULT_CATEGORIES.forEach(c => weights[c.key] = c.weight);
  return { weights, nurseries: [] };
}

const FIRESTORE_DOC_ID = "shared-family-data";
const { db, doc, setDoc, onSnapshot } = window.__firebase;
const stateDocRef = doc(db, "apps", FIRESTORE_DOC_ID);

let state = defaultState();

function saveState() {
  setDoc(stateDocRef, state).catch(err => {
    console.error("Firestoreへの保存に失敗しました", err);
    alert("データの保存に失敗しました。インターネット接続をご確認ください。");
  });
}

function applyRemoteState(data) {
  const base = defaultState();
  state = {
    weights: Object.assign({}, base.weights, (data && data.weights) || {}),
    nurseries: Array.isArray(data && data.nurseries) ? data.nurseries : [],
  };
}

// Firestore移行前にこの端末のlocalStorageへ保存されたデータが残っていれば、
// Firestore側が空の場合に一度だけ引き継ぐ
const LEGACY_STORAGE_KEY = "hoikuenKengakuApp.v1";

function readLegacyLocalData() {
  try {
    const raw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.nurseries) && parsed.nurseries.length > 0) return parsed;
  } catch (e) {
    console.error("旧データの読み込みに失敗しました", e);
  }
  return null;
}

onSnapshot(stateDocRef, snap => {
  if (snap.exists()) {
    applyRemoteState(snap.data());
  } else {
    state = defaultState();
  }

  if (state.nurseries.length === 0) {
    const legacy = readLegacyLocalData();
    if (legacy) {
      const base = defaultState();
      state = {
        weights: Object.assign({}, base.weights, legacy.weights || {}),
        nurseries: legacy.nurseries,
      };
      saveState();
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    } else if (!snap.exists()) {
      setDoc(stateDocRef, state);
    }
  }

  renderAll();
}, err => {
  console.error("Firestoreの同期でエラーが発生しました", err);
  alert("データの同期でエラーが発生しました。インターネット接続をご確認ください。");
});

/* ===================== スコア計算 ===================== */

function totalWeight() {
  return Object.values(state.weights).reduce((a, b) => a + Number(b || 0), 0) || 1;
}

function rankSubtotal(nursery, rank) {
  const cats = DEFAULT_CATEGORIES.filter(c => c.rank === rank);
  let sum = 0;
  cats.forEach(c => {
    const rating = (nursery.ratings && nursery.ratings[c.key]) || 0;
    const w = Number(state.weights[c.key] || 0);
    sum += w * (rating / 5);
  });
  return sum;
}

function totalScore(nursery) {
  const raw = rankSubtotal(nursery, "S") + rankSubtotal(nursery, "A") + rankSubtotal(nursery, "BC");
  return (raw / totalWeight()) * 100;
}

function rankSubScoreNormalized(nursery, rank) {
  // ランク別小計を「そのランクの重み合計」に対する割合として表示 (0-そのランク満点)
  return rankSubtotal(nursery, rank);
}

/* ===================== 月額費用 (スコアとは別枠) ===================== */

const COST_FIELDS = [
  { key: "tuition",      label: "保育料" },
  { key: "hygiene",      label: "衛生費" },
  { key: "subscription", label: "サブスク費" },
  { key: "extended30",   label: "延長料金(30分)" },
  { key: "misc",         label: "延長料金(最大)" },
];

function defaultCosts() {
  const costs = {};
  COST_FIELDS.forEach(f => costs[f.key] = 0);
  return costs;
}

function costTotal(nursery) {
  const costs = Object.assign(defaultCosts(), (nursery && nursery.costs) || {});
  return COST_FIELDS.reduce((sum, f) => sum + Number(costs[f.key] || 0), 0);
}

function formatYen(amount) {
  return `${Number(amount || 0).toLocaleString("ja-JP")}円`;
}

/* ===================== タブ切り替え ===================== */

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    if (btn.dataset.tab === "radar") renderRadar();
  });
});

document.querySelectorAll(".subtab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".subtab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".subtab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.querySelector(`.subtab-panel[data-subtab-panel="${btn.dataset.subtab}"]`).classList.add("active");
  });
});

/* ===================== ランキング描画 ===================== */

function renderRanking() {
  const tbody = document.getElementById("rankingBody");
  tbody.innerHTML = "";
  const empty = document.getElementById("rankingEmpty");

  if (state.nurseries.length === 0) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  const sorted = [...state.nurseries].sort((a, b) => totalScore(b) - totalScore(a));

  sorted.forEach((n, idx) => {
    const tr = document.createElement("tr");
    if (idx === 0) tr.classList.add("rank-1");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${escapeHtml(n.name)}</td>
      <td>${escapeHtml(n.address || "")}</td>
      <td>${escapeHtml(n.visitDate || "")}</td>
      <td class="cost-cell">${formatYen(costTotal(n))}</td>
      <td>${Number(n.settlingDays || 0)}日</td>
      <td class="score-cell">${totalScore(n).toFixed(1)}</td>
      <td>${rankSubScoreNormalized(n, "S").toFixed(1)}</td>
      <td>${rankSubScoreNormalized(n, "A").toFixed(1)}</td>
      <td>${rankSubScoreNormalized(n, "BC").toFixed(1)}</td>
      <td>
        <button class="link-btn" data-edit="${n.id}">編集</button>
        <button class="link-btn danger" data-del="${n.id}">削除</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll("[data-edit]").forEach(b => {
    b.addEventListener("click", () => loadNurseryIntoForm(b.dataset.edit));
  });
  tbody.querySelectorAll("[data-del]").forEach(b => {
    b.addEventListener("click", () => {
      if (confirm("この園のデータを削除しますか?")) {
        state.nurseries = state.nurseries.filter(n => n.id !== b.dataset.del);
        saveState();
        renderAll();
      }
    });
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[s]));
}

/* ===================== 登録・編集フォーム ===================== */

function buildRatingRow(c) {
  const row = document.createElement("div");
  row.className = "rating-row";
  if (c.type === "boolean") {
    const [offLabel, onLabel] = c.boolLabels || ["なし", "あり"];
    row.innerHTML = `
      <div class="label">${c.label}<span class="weight-tag">重み ${state.weights[c.key]}</span><span class="rank-badge mini ${c.rank}">${RANK_LABELS[c.rank]}</span></div>
      <label class="toggle-input rating-control" data-key="${c.key}" data-value="0" data-on-label="${onLabel}" data-off-label="${offLabel}">
        <input type="checkbox">
        <span class="toggle-track"><span class="toggle-thumb"></span></span>
        <span class="toggle-text">${offLabel}</span>
      </label>
    `;
  } else {
    row.innerHTML = `
      <div class="label">${c.label}<span class="weight-tag">重み ${state.weights[c.key]}</span></div>
      <div class="star-input rating-control" data-key="${c.key}" data-value="0">
        ${[1,2,3,4,5].map(v => `<button type="button" data-val="${v}">${v}</button>`).join("")}
      </div>
    `;
  }
  return row;
}

function renderRatingGroups() {
  const container = document.getElementById("ratingGroups");
  container.innerHTML = "";

  // セクション1: 基本設備・サービス (あり/なしのカテゴリ)
  const boolCats = DEFAULT_CATEGORIES.filter(c => c.type === "boolean");
  const boolSection = document.createElement("div");
  boolSection.className = "rating-section";
  boolSection.innerHTML = `<h3 class="rating-section-title">基本設備・サービス<span class="section-hint">(あり/なしで入力)</span></h3>`;
  const boolRows = document.createElement("div");
  boolRows.className = "rating-rows plain";
  boolCats.forEach(c => boolRows.appendChild(buildRatingRow(c)));
  boolSection.appendChild(boolRows);
  container.appendChild(boolSection);

  // セクション2: 保育の質・環境評価 (5段階評価のカテゴリ)
  const ratingSection = document.createElement("div");
  ratingSection.className = "rating-section";
  ratingSection.innerHTML = `<h3 class="rating-section-title">保育の質・環境評価<span class="section-hint">(5段階で入力)</span></h3>`;
  ["S", "A", "BC"].forEach(rank => {
    const cats = DEFAULT_CATEGORIES.filter(c => c.rank === rank && c.type !== "boolean");
    if (cats.length === 0) return;
    const details = document.createElement("details");
    details.className = "rank-group";
    details.open = rank === "S";
    const summary = document.createElement("summary");
    summary.innerHTML = `<span class="rank-badge ${rank}">${RANK_LABELS[rank]}</span> 評価入力 (${cats.length}項目)`;
    details.appendChild(summary);

    const rows = document.createElement("div");
    rows.className = "rating-rows";
    cats.forEach(c => rows.appendChild(buildRatingRow(c)));
    details.appendChild(rows);
    ratingSection.appendChild(details);
  });
  container.appendChild(ratingSection);

  container.querySelectorAll(".star-input").forEach(starInput => {
    starInput.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        const val = Number(btn.dataset.val);
        const current = starInput.dataset.value ? Number(starInput.dataset.value) : 0;
        const newVal = current === val ? 0 : val; // 同じ値をクリックで解除
        starInput.dataset.value = newVal;
        starInput.querySelectorAll("button").forEach(b => {
          b.classList.toggle("active", Number(b.dataset.val) <= newVal);
        });
      });
    });
  });

  container.querySelectorAll(".toggle-input").forEach(toggle => {
    const checkbox = toggle.querySelector("input[type=checkbox]");
    checkbox.addEventListener("change", () => {
      const checked = checkbox.checked;
      toggle.dataset.value = checked ? 5 : 0;
      toggle.classList.toggle("checked", checked);
      toggle.querySelector(".toggle-text").textContent = checked ? toggle.dataset.onLabel : toggle.dataset.offLabel;
    });
  });
}

function setRatingValue(key, value) {
  const el = document.querySelector(`.rating-control[data-key="${key}"]`);
  if (!el) return;
  el.dataset.value = value;
  if (el.classList.contains("toggle-input")) {
    const checked = Number(value) >= 5;
    el.querySelector("input[type=checkbox]").checked = checked;
    el.classList.toggle("checked", checked);
    el.querySelector(".toggle-text").textContent = checked ? el.dataset.onLabel : el.dataset.offLabel;
  } else {
    el.querySelectorAll("button").forEach(b => {
      b.classList.toggle("active", Number(b.dataset.val) <= Number(value));
    });
  }
}

function getRatingValues() {
  const ratings = {};
  document.querySelectorAll(".rating-control").forEach(el => {
    ratings[el.dataset.key] = Number(el.dataset.value || 0);
  });
  return ratings;
}

/* ===================== 見学メモ 入力欄 ===================== */

function renderMemoQuestions() {
  const container = document.getElementById("memoQuestionGroups");
  container.innerHTML = "";
  VISIT_QUESTIONS.forEach(cat => {
    const section = document.createElement("div");
    section.className = "memo-category";
    section.innerHTML = `<h4 class="memo-category-title">${cat.category}</h4>`;
    const list = document.createElement("div");
    list.className = "memo-question-list";
    cat.questions.forEach(q => {
      const row = document.createElement("div");
      row.className = "memo-question-row";
      row.innerHTML = `
        <label class="memo-question-label" for="memo_${q.key}">${q.text}</label>
        <textarea class="memo-answer" id="memo_${q.key}" data-qkey="${q.key}" rows="2" placeholder="メモ・回答を入力"></textarea>
      `;
      list.appendChild(row);
    });
    section.appendChild(list);
    container.appendChild(section);
  });
}

function getMemoValues() {
  const memos = {};
  document.querySelectorAll(".memo-answer").forEach(ta => {
    memos[ta.dataset.qkey] = ta.value.trim();
  });
  return memos;
}

function setMemoValues(memos) {
  document.querySelectorAll(".memo-answer").forEach(ta => {
    ta.value = (memos && memos[ta.dataset.qkey]) || "";
  });
}

const COST_FIELD_INPUT_IDS = {
  tuition: "fCostTuition",
  hygiene: "fCostHygiene",
  subscription: "fCostSubscription",
  extended30: "fCostExtended30",
  misc: "fCostMisc",
};

function getCostFieldValues() {
  const costs = {};
  COST_FIELDS.forEach(f => {
    costs[f.key] = Number(document.getElementById(COST_FIELD_INPUT_IDS[f.key]).value || 0);
  });
  return costs;
}

function updateCostTotalDisplay() {
  const total = COST_FIELDS.reduce((sum, f) => {
    return sum + Number(document.getElementById(COST_FIELD_INPUT_IDS[f.key]).value || 0);
  }, 0);
  document.getElementById("costTotalDisplay").textContent = formatYen(total);
}

Object.values(COST_FIELD_INPUT_IDS).forEach(id => {
  document.getElementById(id).addEventListener("input", updateCostTotalDisplay);
});

function switchToSubtab(name) {
  document.querySelectorAll(".subtab-btn").forEach(b => b.classList.toggle("active", b.dataset.subtab === name));
  document.querySelectorAll(".subtab-panel").forEach(p => p.classList.toggle("active", p.dataset.subtabPanel === name));
}

function resetForm() {
  document.getElementById("nurseryForm").reset();
  document.getElementById("nurseryId").value = "";
  document.getElementById("editFormTitle").textContent = "園を新規登録";
  document.getElementById("btnCancelEdit").hidden = true;
  renderRatingGroups();
  updateCostTotalDisplay();
  renderMemoQuestions();
  switchToSubtab("score");
}

function loadNurseryIntoForm(id) {
  const n = state.nurseries.find(x => x.id === id);
  if (!n) return;
  document.querySelector('[data-tab="edit"]').click();
  document.getElementById("nurseryId").value = n.id;
  document.getElementById("fName").value = n.name || "";
  document.getElementById("fAddress").value = n.address || "";
  document.getElementById("fVisitDate").value = n.visitDate || "";
  document.getElementById("fEntryTag").value = n.entryTag || "普通";
  document.getElementById("fMunicipalityMemo").value = n.municipalityMemo || "";
  document.getElementById("fMemo").value = n.memo || "";
  const costs = Object.assign(defaultCosts(), n.costs || {});
  COST_FIELDS.forEach(f => {
    document.getElementById(COST_FIELD_INPUT_IDS[f.key]).value = costs[f.key] || "";
  });
  updateCostTotalDisplay();
  document.getElementById("fSettlingDays").value = n.settlingDays || "";
  renderRatingGroups();
  Object.entries(n.ratings || {}).forEach(([k, v]) => setRatingValue(k, v));
  renderMemoQuestions();
  setMemoValues(n.visitMemos);
  switchToSubtab("score");
  document.getElementById("editFormTitle").textContent = `編集: ${n.name}`;
  document.getElementById("btnCancelEdit").hidden = false;
}

document.getElementById("nurseryForm").addEventListener("submit", e => {
  e.preventDefault();
  const id = document.getElementById("nurseryId").value || crypto.randomUUID();
  const nursery = {
    id,
    name: document.getElementById("fName").value.trim(),
    address: document.getElementById("fAddress").value.trim(),
    visitDate: document.getElementById("fVisitDate").value,
    entryTag: document.getElementById("fEntryTag").value,
    municipalityMemo: document.getElementById("fMunicipalityMemo").value.trim(),
    memo: document.getElementById("fMemo").value.trim(),
    ratings: getRatingValues(),
    costs: getCostFieldValues(),
    settlingDays: Number(document.getElementById("fSettlingDays").value || 0),
    visitMemos: getMemoValues(),
  };
  const idx = state.nurseries.findIndex(x => x.id === id);
  if (idx >= 0) state.nurseries[idx] = nursery;
  else state.nurseries.push(nursery);
  saveState();
  resetForm();
  document.querySelector('[data-tab="ranking"]').click();
  renderAll();
});

document.getElementById("btnCancelEdit").addEventListener("click", resetForm);

/* ===================== 重み設定 ===================== */

function renderWeights() {
  const container = document.getElementById("weightGroups");
  container.innerHTML = "";
  ["S", "A", "BC"].forEach(rank => {
    const cats = DEFAULT_CATEGORIES.filter(c => c.rank === rank);
    const details = document.createElement("details");
    details.className = "rank-group";
    details.open = true;
    const rankSum = cats.reduce((a, c) => a + Number(state.weights[c.key] || 0), 0);
    const summary = document.createElement("summary");
    summary.innerHTML = `<span class="rank-badge ${rank}">${RANK_LABELS[rank]}</span> 小計: <span data-ranksum="${rank}">${rankSum}</span>`;
    details.appendChild(summary);

    const rows = document.createElement("div");
    rows.className = "rating-rows";
    cats.forEach(c => {
      const row = document.createElement("div");
      row.className = "weight-row";
      row.innerHTML = `
        <div class="label">${c.label}</div>
        <input type="number" min="0" max="30" step="1" data-weight-key="${c.key}" value="${state.weights[c.key]}">
      `;
      rows.appendChild(row);
    });
    details.appendChild(rows);
    container.appendChild(details);
  });

  container.querySelectorAll("input[data-weight-key]").forEach(input => {
    input.addEventListener("input", updateWeightSumInfo);
  });
  updateWeightSumInfo();
}

function updateWeightSumInfo() {
  let total = 0;
  const rankSums = { S: 0, A: 0, BC: 0 };
  document.querySelectorAll("input[data-weight-key]").forEach(input => {
    const key = input.dataset.weightKey;
    const cat = DEFAULT_CATEGORIES.find(c => c.key === key);
    const val = Number(input.value || 0);
    total += val;
    rankSums[cat.rank] += val;
  });
  ["S", "A", "BC"].forEach(rank => {
    const el = document.querySelector(`[data-ranksum="${rank}"]`);
    if (el) el.textContent = rankSums[rank];
  });
  const info = document.getElementById("weightSumInfo");
  info.innerHTML = `現在の重み合計: <b>${total}</b> 点 (100からずれていてもスコアは自動的に100点満点に正規化されます)`;
}

document.getElementById("btnSaveWeights").addEventListener("click", () => {
  document.querySelectorAll("input[data-weight-key]").forEach(input => {
    state.weights[input.dataset.weightKey] = Number(input.value || 0);
  });
  saveState();
  renderAll();
  alert("重みを保存しました。");
});

document.getElementById("btnResetWeights").addEventListener("click", () => {
  if (!confirm("重みを初期値に戻しますか?")) return;
  state.weights = defaultState().weights;
  saveState();
  renderAll();
});

/* ===================== レーダーチャート ===================== */

let selectedNurseryIds = new Set();
let radarChartInstance = null;
let currentRadarRank = "S";

const RADAR_COLORS = ["#2f6fed", "#e8543e", "#2f9e4f", "#e0a01e", "#8e44ad", "#16a085"];

function renderRadarNurserySelect() {
  const container = document.getElementById("radarNurserySelect");
  container.innerHTML = "";
  state.nurseries.forEach(n => {
    const chip = document.createElement("div");
    chip.className = "chip" + (selectedNurseryIds.has(n.id) ? " selected" : "");
    chip.textContent = n.name;
    chip.addEventListener("click", () => {
      if (selectedNurseryIds.has(n.id)) {
        selectedNurseryIds.delete(n.id);
      } else {
        if (selectedNurseryIds.size >= 6) {
          alert("比較できるのは最大6園です。");
          return;
        }
        selectedNurseryIds.add(n.id);
      }
      renderRadarNurserySelect();
      renderRadar();
    });
    container.appendChild(chip);
  });
}

document.querySelectorAll(".radar-rank-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".radar-rank-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentRadarRank = btn.dataset.rank;
    renderRadar();
  });
});

function getTopWeightCategories(n = 8) {
  return [...DEFAULT_CATEGORIES].sort((a, b) => b.weight - a.weight).slice(0, n);
}

function renderRadar() {
  const empty = document.getElementById("radarEmpty");
  const canvas = document.getElementById("radarChart");

  if (selectedNurseryIds.size === 0) {
    empty.hidden = false;
    canvas.style.display = "none";
    if (radarChartInstance) { radarChartInstance.destroy(); radarChartInstance = null; }
    return;
  }
  empty.hidden = true;
  canvas.style.display = "block";

  let cats;
  if (currentRadarRank === "TOP") {
    cats = getTopWeightCategories(8);
  } else {
    cats = DEFAULT_CATEGORIES.filter(c => c.rank === currentRadarRank);
  }

  const labels = cats.map(c => c.label);
  const nurseries = state.nurseries.filter(n => selectedNurseryIds.has(n.id));

  const datasets = nurseries.map((n, idx) => ({
    label: n.name,
    data: cats.map(c => (n.ratings && n.ratings[c.key]) || 0),
    backgroundColor: hexToRgba(RADAR_COLORS[idx % RADAR_COLORS.length], 0.15),
    borderColor: RADAR_COLORS[idx % RADAR_COLORS.length],
    pointBackgroundColor: RADAR_COLORS[idx % RADAR_COLORS.length],
    borderWidth: 2,
  }));

  if (radarChartInstance) radarChartInstance.destroy();
  radarChartInstance = new Chart(canvas, {
    type: "radar",
    data: { labels, datasets },
    options: {
      responsive: true,
      scales: {
        r: { min: 0, max: 5, ticks: { stepSize: 1 } }
      },
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ===================== 入りやすさ一覧 ===================== */

function renderEntryList() {
  const tbody = document.getElementById("entryBody");
  tbody.innerHTML = "";
  state.nurseries.forEach(n => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHtml(n.name)}</td>
      <td>${escapeHtml(n.entryTag || "")}</td>
      <td>${escapeHtml(n.municipalityMemo || "")}</td>
      <td>${escapeHtml(n.visitDate || "")}</td>
    `;
    tbody.appendChild(tr);
  });
}

/* ===================== エクスポート / インポート ===================== */

document.getElementById("btnExport").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `hoikuen-kengaku-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("fileImport").addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!imported.nurseries || !imported.weights) throw new Error("形式が不正です");
      if (confirm("現在のデータを上書きしてインポートしますか?")) {
        state = {
          weights: Object.assign({}, defaultState().weights, imported.weights),
          nurseries: imported.nurseries,
        };
        saveState();
        renderAll();
        alert("インポートが完了しました。");
      }
    } catch (err) {
      alert("読み込みに失敗しました: " + err.message);
    } finally {
      e.target.value = "";
    }
  };
  reader.readAsText(file);
});

/* ===================== 初期描画 ===================== */

function renderAll() {
  renderRanking();
  renderWeights();
  renderRadarNurserySelect();
  renderRadar();
  renderEntryList();
  if (!document.getElementById("nurseryId").value) renderRatingGroups();
}

resetForm();
