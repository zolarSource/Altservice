document.addEventListener("DOMContentLoaded",()=>{new Swiper(".swiper-container",{direction:"horizontal",navigation:{nextEl:".slider__arrow-next",prevEl:".slider__arrow-prev"}}),IMask(document.querySelector(".modal__input--phone"),{mask:"+{38}(000)000-00-00",lazy:!1});const e=document.querySelector(".main-nav"),t=document.querySelectorAll(".page-adress"),n=document.querySelector(".modal-container"),a=document.querySelector(".modal__close"),o=document.querySelectorAll(".button--sign-up"),c=document.querySelector(".main-nav__content"),i=document.querySelector(".main-nav__menu-open"),r=()=>{pageYOffset>0?e.classList.add("main-nav--active"):e.classList.remove("main-nav--active")};r();const l=e=>{const t=parseInt(window.getComputedStyle(e,null).getPropertyValue("padding-top")),n=e.getBoundingClientRect().top+window.pageYOffset+t-120;window.scrollTo({top:n,behavior:"smooth"})},s=()=>{c.classList.remove("main-nav__content--active"),i.classList.remove("main-nav__burger-icon--active")};e.addEventListener("click",e=>{e.target.classList.contains("main-nav__link")&&(e.preventDefault(),l(document.querySelector("#"+e.target.getAttribute("data-target"))),s())}),[...o].map(e=>e.addEventListener("click",e=>{e.preventDefault(),n.classList.add("modal-container--active")})),a.addEventListener("click",()=>{n.classList.remove("modal-container--active")}),i.addEventListener("click",()=>{c.classList.toggle("main-nav__content--active"),i.classList.toggle("main-nav__burger-icon--active")}),[...t].map(e=>e.addEventListener("click",()=>{l(document.querySelector("#contacts")),s()})),window.addEventListener("scroll",()=>{r()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiU3dpcGVyIiwiZGlyZWN0aW9uIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIklNYXNrIiwicXVlcnlTZWxlY3RvciIsIm1hc2siLCJsYXp5IiwibWFpbk5hdiIsImFkcmVzc2VzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxDbG9zZSIsInNpZ25VcEJ1dHRvbnMiLCJtYWluTmF2Q29udGVudE1vYmlsZSIsIm1lbnVPcGVuIiwiY2hlY2tTY3JvbGwiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjcm9sbFRvIiwic2Nyb2xsVGFyZ2V0Iiwic2Nyb2xsVGFyZ2V0UGFkZGluZ1RvcCIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzY3JvbGxPZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJiZWhhdmlvciIsImNsb3NlTW9iaWxlTmF2IiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJnZXRBdHRyaWJ1dGUiLCJtYXAiLCJidG4iLCJ0b2dnbGUiLCJhZHJlc3MiXSwibWFwcGluZ3MiOiJBQUFBQSxTQUFTQyxpQkFBaUIsbUJBQW9CLEtBQzVDLElBQUlDLE9BQU8sb0JBQXFCLENBQzlCQyxVQUFXLGFBQ1hDLFdBQVksQ0FDVkMsT0FBUSxzQkFDUkMsT0FBUSx5QkFHWkMsTUFBTVAsU0FBU1EsY0FBYyx3QkFBeUIsQ0FDcERDLEtBQU0sc0JBQ05DLE1BQU0sSUFHUixNQUFNQyxFQUFVWCxTQUFTUSxjQUFjLGFBQ2pDSSxFQUFXWixTQUFTYSxpQkFBaUIsZ0JBQ3JDQyxFQUFpQmQsU0FBU1EsY0FBYyxvQkFDeENPLEVBQWFmLFNBQVNRLGNBQWMsaUJBQ3BDUSxFQUFnQmhCLFNBQVNhLGlCQUFpQixvQkFDMUNJLEVBQXVCakIsU0FBU1EsY0FBYyxzQkFDOUNVLEVBQVdsQixTQUFTUSxjQUFjLHdCQUdsQ1csRUFBYyxLQUNkQyxZQUZlLEVBR2pCVCxFQUFRVSxVQUFVQyxJQUFJLG9CQUV0QlgsRUFBUVUsVUFBVUUsT0FBTyxxQkFHN0JKLElBRUEsTUFDTUssRUFBWUMsSUFDaEIsTUFBTUMsRUFBeUJDLFNBQzdCQyxPQUNHQyxpQkFBaUJKLEVBQWMsTUFDL0JLLGlCQUFpQixnQkFFaEJDLEVBQ0pOLEVBQWFPLHdCQUF3QkMsSUFDckNMLE9BQU9SLFlBQ1BNLEVBVmUsSUFZakJFLE9BQU9KLFNBQVMsQ0FBRVMsSUFBS0YsRUFBY0csU0FBVSxZQUczQ0MsRUFBaUIsS0FDckJsQixFQUFxQkksVUFBVUUsT0FBTyw2QkFDdENMLEVBQVNHLFVBQVVFLE9BQU8sa0NBZ0I1QlosRUFBUVYsaUJBQWlCLFFBQVVtQyxJQUM3QkEsRUFBRUMsT0FBT2hCLFVBQVVpQixTQUFTLG9CQUM5QkYsRUFBRUcsaUJBQ0ZmLEVBQ0V4QixTQUFTUSxjQUFjLElBQUk0QixFQUFFQyxPQUFPRyxhQUFhLGlCQUduREwsT0FJSixJQUFJbkIsR0FBZXlCLElBQUtDLEdBQ3RCQSxFQUFJekMsaUJBQWlCLFFBQVVtQyxJQUM3QkEsRUFBRUcsaUJBcEJKekIsRUFBZU8sVUFBVUMsSUFBSSw4QkF5Qi9CUCxFQUFXZCxpQkFBaUIsUUFBUyxLQXJCbkNhLEVBQWVPLFVBQVVFLE9BQU8sNkJBeUJsQ0wsRUFBU2pCLGlCQUFpQixRQUFTLEtBbENqQ2dCLEVBQXFCSSxVQUFVc0IsT0FBTyw2QkFDdEN6QixFQUFTRyxVQUFVc0IsT0FBTyxtQ0FxQzVCLElBQUkvQixHQUFVNkIsSUFBS0csR0FDakJBLEVBQU8zQyxpQkFBaUIsUUFBUyxLQUMvQnVCLEVBQVN4QixTQUFTUSxjQUFjLGNBQ2hDMkIsT0FJSlAsT0FBTzNCLGlCQUFpQixTQUFVLEtBQ2hDa0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zbGlkZXJfX2Fycm93LW5leHQnLFxuICAgICAgcHJldkVsOiAnLnNsaWRlcl9fYXJyb3ctcHJldicsXG4gICAgfSxcbiAgfSk7XG4gIElNYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faW5wdXQtLXBob25lJyksIHtcbiAgICBtYXNrOiAnK3szOH0oMDAwKTAwMC0wMC0wMCcsXG4gICAgbGF6eTogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0IG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcbiAgY29uc3QgYWRyZXNzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS1hZHJlc3MnKTtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGFpbmVyJyk7XG4gIGNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJyk7XG4gIGNvbnN0IHNpZ25VcEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLS1zaWduLXVwJyk7XG4gIGNvbnN0IG1haW5OYXZDb250ZW50TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19jb250ZW50Jyk7XG4gIGNvbnN0IG1lbnVPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19tZW51LW9wZW4nKTtcblxuICBjb25zdCBzY3JvbGxIZWlnaHQgPSAwO1xuICBjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcbiAgICBpZiAocGFnZVlPZmZzZXQgPiBzY3JvbGxIZWlnaHQpIHtcbiAgICAgIG1haW5OYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYtLWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYWluTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbmF2LS1hY3RpdmUnKTtcbiAgICB9XG4gIH07XG4gIGNoZWNrU2Nyb2xsKCk7XG5cbiAgY29uc3QgdGl0bGVIZWlodCA9IDEyMDtcbiAgY29uc3Qgc2Nyb2xsVG8gPSAoc2Nyb2xsVGFyZ2V0KSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVGFyZ2V0UGFkZGluZ1RvcCA9IHBhcnNlSW50KFxuICAgICAgd2luZG93XG4gICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbFRhcmdldCwgbnVsbClcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJylcbiAgICApO1xuICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9XG4gICAgICBzY3JvbGxUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICtcbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCArXG4gICAgICBzY3JvbGxUYXJnZXRQYWRkaW5nVG9wIC1cbiAgICAgIHRpdGxlSGVpaHQ7XG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBzY3JvbGxPZmZzZXQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vYmlsZU5hdiA9ICgpID0+IHtcbiAgICBtYWluTmF2Q29udGVudE1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdl9fY29udGVudC0tYWN0aXZlJyk7XG4gICAgbWVudU9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1uYXZfX2J1cmdlci1pY29uLS1hY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVNb2JpbGVOYXYgPSAoKSA9PiB7XG4gICAgbWFpbk5hdkNvbnRlbnRNb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi1uYXZfX2NvbnRlbnQtLWFjdGl2ZScpO1xuICAgIG1lbnVPcGVuLmNsYXNzTGlzdC50b2dnbGUoJ21haW4tbmF2X19idXJnZXItaWNvbi0tYWN0aXZlJyk7XG4gIH07XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRhaW5lci0tYWN0aXZlJyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlTW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtY29udGFpbmVyLS1hY3RpdmUnKTtcbiAgfTtcblxuICBtYWluTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLW5hdl9fbGluaycpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzY3JvbGxUbyhcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpfWApXG4gICAgICApO1xuXG4gICAgICBjbG9zZU1vYmlsZU5hdigpO1xuICAgIH1cbiAgfSk7XG5cbiAgWy4uLnNpZ25VcEJ1dHRvbnNdLm1hcCgoYnRuKSA9PlxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvcGVuTW9kYWwoKTtcbiAgICB9KVxuICApO1xuXG4gIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlTW9kYWwoKTtcbiAgfSk7XG5cbiAgbWVudU9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlTW9iaWxlTmF2KCk7XG4gIH0pO1xuXG4gIFsuLi5hZHJlc3Nlc10ubWFwKChhZHJlc3MpID0+XG4gICAgYWRyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2Nyb2xsVG8oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzJykpO1xuICAgICAgY2xvc2VNb2JpbGVOYXYoKTtcbiAgICB9KVxuICApO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgY2hlY2tTY3JvbGwoKTtcbiAgfSk7XG59KTsiXX0=
