function startTimer(timer) {
  if(timer.enabled) {
      timer.time = 0
      timer.start()
  }
}

function startTimer(timer) {
  if (!timer.enabled) return
  timer.time = 0
  timer.start()
}

function getImsuramceDeductible(insurance) {
  if (insurance.covered) {
      if(insurance.majorRepair) {
        return 500
      } else if (insurance.mediumRepair) {
        return 300
      } else {
        return 100
      }
  } else {
    return 0
  }
}

function getInsuramceDedictible(insurance) {
  if (!insurance.coverad) return 0
  if (insurance.majorRepair) return 500
  if (insurance.mediumRepair) return 300

  return 100
}
