class Terran {
  // 모든 객체가 갖는 명사적 특성들을 멤버변수로 정의
  constructor(name, hp, dps) {
    this._name = name;
    this._hp = hp;
    this._dps = dps;
    console.log("[%s] 체력: %d, 공격력: %d", name, hp, dps);
  }

  attack(target) {
    console.log(`${this._name} (이)가 ${target} (을)를 공격합니다. 데미지: ${this._dps}`);
  }
};

class Marine extends Terran {
  // attack 메서드 overide
  attack(target) {
    console.log(`${this._name} (이)가 ${target} 에게 사격을 합니다. 데미지: ${this._dps}`);
  }
};

class Tank extends Terran {
  attack(target) {
    // this는 우리집 , super 큰집
    super.attack(target);
    console.log(">>>>> 탱크 포격");
  }
};

class Firebat extends Terran {
  constructor(name) {
    // 클래스 상속 관계에서 부모의 생성자는 무조건 호출되어야 하므로,
    // 자식이 생성자를 갖는 경우 그 안에서 부모의 생성자를 강제 호출해야 한다.
    super(name, 500, 50);
  }
};

const m = new Marine("해병1", 120, 30);
// 자식 클래스에 의해 재정의된 기능 호출 -> 부모의 메서드는 가려진다.
m.attack("질럿");

const t = new Tank("탱크1", 120, 30);
t.attack("드라군");

const f = new Firebat("화염방사병");
f.attack("적");




// class Example {
//   constructor(para1, para2) {
//     this._para1 = para1;
//     this._para2 = para2;
//   }

//   sample(ex) {
//     console.log(`${ex},${this._para1}와 ${this._para2}을 부모클래스의 메서드에서 출력`);
//   }
// };

// class Over extends Example {
//   // 부모클래스의 메서드를 자식클래스에서 재정의
//   sample(ex) {
//     console.log(`${ex},${this._para1}와 ${this._para2} 땡긴다.`);
//   }
// };

// class Over2 extends Example {
//   sample(ex) {
//     super.sample(ex);
//   }
// }

// const o = new Over("소고기", "곱창");
// // 부모클래스에 선언된 sample 메서드 호출시 자식클래스에 재정의된 메서드 호출
// o.sample("참치");

// const o2 = new Over2("소고기", "곱창");
// o2.sample("참치");