const MobileMenuToggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;

    span {
      display: block;
      width: 25px;
      height: 3px;
      margin-bottom: 5px;
      background-color: #333333;
      transition: transform 0.3s, opacity 0.3s;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.active {
      span:first-child {
        transform: rotate(45deg) translateX(2px);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:last-child {
        transform: rotate(-45deg) translateX(2px);
      }
    }
  }
`;
