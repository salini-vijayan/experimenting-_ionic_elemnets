const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesLists = document.querySelector("#expenses-list");
const totalExpenseOutput = document.querySelector('#total-expense');

let totalExpense = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

// Adding event listener
confirmBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  // Validation
  // trim will remove trailing and preceeding excess whitespaces

  if (
    enteredAmount.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }
  // document.createElement a default DOM API
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ' $' + enteredAmount; 
  expensesLists.appendChild(newItem);
  totalExpense += +enteredAmount;
  totalExpenseOutput.textContent = totalExpense;
  clear();

});


cancelBtn.addEventListener('click',clear);
/* clear without parantheses becoz i don't want to execute it immedialtely.
Instead just pass a reference of the function to the eventlistener,
so that this will be executed dynamically when this click occurs. */
