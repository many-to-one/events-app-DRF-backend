# from matplotlib.image import imread
# import matplotlib.pyplot as plt

# test = imread("media/maps/kandlewo_1L7MVut.JPG")
# plt.imshow(test)
# plt.scatter(250, 150, s=200, c='red', marker='o')
# plt.show()

import folium

mapObj = folium.Map(
    location=[51.806330, 16.318330],
    zoom_start=10,
)

folium.Marker([51.806330, 16.318330]).add_to(mapObj)
mapObj.save('media/maps/output.html')
