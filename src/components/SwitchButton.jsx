function SwitchButton({ handleToggleValue, toggleValue }) {
  return (
    <div class="form-check form-switch position-absolute top-0 start-0 ms-3 ps-5 pt-3">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={(e) => {
          handleToggleValue();
        }}
      />
      <label
        class="form-check-label d-block text-color fw-bolder"
        for="flexSwitchCheckDefault">
        {toggleValue === false ? "°C" : "°F"}
      </label>
    </div>
  );
}

export default SwitchButton;
