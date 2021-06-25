export const pageTransitions = {
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    }
  },
  initial: {
    opacity: 0,
    transition: {
      duration: 0.1,
    }
  }
};

export const modalTransitions = {
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    }
  },
  initial: {
    opacity: 0,
  }
};

export const sidebarTransitions = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.6,
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    }
  }
};

let easing = [0.6, -0.05, 0.01, 0.99];

export const staggerTransitions = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const tableTransitions = {
  initial: {
    y: 10,
    opacity: 0,
    transition: { duration: 0.3, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing
    }
  }
};
