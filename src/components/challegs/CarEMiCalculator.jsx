import React, { useEffect, useState } from "react";

export const CarEMiCalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [roi, setRoi] = useState(5);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  useEffect(() => {
    //E= P. R. (1+R)^n/[(1+R)^n -1]

    const roiPerMonth = roi / 12 / 100;

    const months = tenure * 12;
    let principalAmount = amount - downPayment;
    const processingFee = (principalAmount * 1) / 100;
    // principalAmount = principalAmount + processingFee;
    const calculateEmi =
      (principalAmount * roiPerMonth * (1 + roiPerMonth) ** months) /
      [(1 + roiPerMonth) ** months - 1];

    setEmi(calculateEmi.toFixed(0));

    // const roiPerMonth = roi / 12 / 100; // Convert annual rate to monthly and then to a decimal
    // const months = tenure * 12;

    // const calculateEmi =
    //   (amount * roiPerMonth * Math.pow(1 + roiPerMonth, months)) /
    //   (Math.pow(1 + roiPerMonth, months) - 1);

    // const emi = calculateEmi.toFixed(0);
    // setEmi(emi);
  }, [tenure, roi, amount, downPayment]);

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p1 resolve");
    }, 300);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p2 resolve");
    }, 500);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rehe");
    }, 700);
  });

  // function myAllSettled(promises) {
  //   return new Promise((resolve, reject) => {
  //     let result = [];
  //     let complete = promises.length;
  //     promises.forEach((promise) => {
  //       promise
  //         .then((res) => {
  //           result.push({
  //             value: res,
  //             status: "fulfil",
  //           });
  //           if (complete === 0) {
  //             resolve(result);
  //           }

  //           complete--;

  //         })
  //         .catch((err) => {
  //           complete--;
  //           result.push({
  //             reason:err ,
  //             status: "rejected",
  //           });
  //           if (complete === 0) {
  //             resolve(result);
  //           }
  //           complete--;

  //         });
  //     });
  //   });
  // }

  function myRace(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise
          .then((res) => {
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    });
  }

// function myAny(promises){
// return new Promise((resolve,reject)=>[
//  const result=[] 

// ])

// }

  // myRace([p1, p2, p3])
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err, "dekho"));
  Promise.any([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err, "dekho"));
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Car Loan EMI Calculator</h3>
        <div>
          <h4>Amount</h4>
          <input
            value={amount}
            placeholder="Enter amount"
            style={{
              height: 30,
              width: 500,
            }}
            onChange={(e) => {
              setAmount(Number(e.currentTarget.value));
            }}
          />
        </div>
        <div>
          <h4>ROI (pa)</h4>
          <input
            placeholder="Enter ROI (PA)"
            value={roi}
            style={{
              height: 30,
              width: 500,
            }}
            onChange={(e) => {
              setRoi(Number(e.currentTarget.value));
            }}
          />
        </div>
        <div>
          <h4>Down Payment :{downPayment}</h4>
          <input
            min={50000}
            max={amount}
            value={downPayment}
            type="range"
            onChange={(e) => {
              setDownPayment(Number(e.currentTarget.value));
            }}
            placeholder="Loan tenure"
            style={{
              width: 500,
            }}
          />
        </div>
        <div>
          <h4>Loan tenure - {tenure}</h4>
          <input
            min={1}
            max={50}
            value={tenure}
            type="range"
            onChange={(e) => {
              setTenure(Number(e.currentTarget.value));
            }}
            placeholder="Loan tenure"
            style={{
              width: 500,
            }}
          />
        </div>
        EMI : {emi}
      </div>
    </div>
  );
};
