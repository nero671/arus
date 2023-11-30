export const togglePopupWindows = () => {
    document.addEventListener('click', ({ target }) => {
        if (target.closest('[data-type]')) {
            const popup = document.querySelector(
                `[data-popup="${target.dataset.type}"]`
            );


            // if (document.querySelector('._is-open')) {
            //   document.querySelectorAll('._is-open').forEach((modal) => {
            //     modal.classList.toggle('_is-open');
            //   });
            // }

            popup.classList.toggle('_is-open');

            // toggleBodyLock(true);
        }

        if (
          target.classList.contains('_is-open') ||
          target.closest('.button-close')
        ) {
          const popup = target.closest('._is-open');

          popup.classList.remove('_is-open');
          // toggleBodyLock(false);
        }
    });
};
